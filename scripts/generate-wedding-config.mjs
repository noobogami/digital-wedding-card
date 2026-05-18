#!/usr/bin/env node
/**
 * Syncs .env → public/wedding-config.js and index.html (from index.html.template).
 * Docker: run with config/html paths at container start.
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

/** Load .env into process.env (does not override existing env vars). */
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(resolve(rootDir, '.env'));

function env(name) {
  const v = process.env[name];
  return v !== undefined && v !== '' ? v : undefined;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setNested(target, path, value) {
  let cur = target;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!cur[key] || typeof cur[key] !== 'object') cur[key] = {};
    cur = cur[key];
  }
  cur[path[path.length - 1]] = value;
}

function getSiteMeta() {
  const bride = env('WEDDING_BRIDE') || 'نام عروس';
  const groom = env('WEDDING_GROOM') || 'نام داماد';
  const intro = env('WEDDING_MESSAGE_INTRO')?.replace(/\\n/g, '\n');
  const siteUrl = (env('WEDDING_SITE_URL') || 'https://example.com/').replace(/\/?$/, '/');
  const ogImage =
    env('WEDDING_OG_IMAGE') ||
    `${siteUrl.replace(/\/$/, '')}/preview.jpg`;

  return {
    title: env('WEDDING_SITE_TITLE') || `${bride} و ${groom}`,
    description:
      env('WEDDING_SITE_DESCRIPTION') ||
      (intro ? intro.split('\n')[0] : '') ||
      'دعوتنامه دیجیتال',
    siteUrl,
    ogImage,
    telegram: env('WEDDING_TELEGRAM_CHANNEL') || '',
  };
}

function writeWeddingConfig(outPath) {
  const config = {};

  const mappings = [
    ['WEDDING_BRIDE', ['couple', 'bride']],
    ['WEDDING_GROOM', ['couple', 'groom']],
    ['WEDDING_BRIDE_LAST_NAME', ['couple', 'brideLastName']],
    ['WEDDING_GROOM_LAST_NAME', ['couple', 'groomLastName']],
    ['WEDDING_EVENT_TYPE', ['event', 'type']],
    ['WEDDING_DAY_NAME', ['event', 'date', 'dayName']],
    ['WEDDING_PERSIAN_DATE', ['event', 'date', 'persianDate']],
    ['WEDDING_TIME', ['event', 'date', 'time']],
    ['WEDDING_LOCATION_NAME', ['location', 'name']],
    ['WEDDING_LOCATION_ADDRESS', ['location', 'address']],
    ['WEDDING_MESSAGE_INTRO', ['message', 'intro']],
    ['WEDDING_MESSAGE_BODY', ['message', 'body']],
    ['WEDDING_ENVELOPE_IMAGE', ['envelope', 'image']],
    ['WEDDING_ENVELOPE_ALT', ['envelope', 'alt']],
    ['WEDDING_MUSIC_SRC', ['music', 'src']],
    ['WEDDING_DECORATION', ['theme', 'decoration']],
  ];

  for (const [envKey, path] of mappings) {
    let value = env(envKey);
    if (value === undefined) continue;
    value = value.replace(/\\n/g, '\n');
    setNested(config, path, value);
  }

  const lat = env('WEDDING_LATITUDE');
  const lng = env('WEDDING_LONGITUDE');
  if (lat !== undefined) {
    setNested(config, ['location', 'coordinates', 'latitude'], Number(lat));
  }
  if (lng !== undefined) {
    setNested(config, ['location', 'coordinates', 'longitude'], Number(lng));
  }

  const volume = env('WEDDING_MUSIC_VOLUME');
  if (volume !== undefined) {
    setNested(config, ['music', 'defaultVolume'], Number(volume));
  }

  const js = `window.__WEDDING_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, js, 'utf8');
  console.log(`Wrote ${outPath}`);
}

function buildMetaBlock() {
  const meta = getSiteMeta();
  const telegramMeta = meta.telegram
    ? `    <meta property="telegram:channel" content="${escapeHtml(meta.telegram)}" />`
    : '';

  const block = `    <title>${escapeHtml(meta.title)}</title>
    <meta name="title" content="${escapeHtml(meta.title)}" />
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(meta.siteUrl)}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:image" content="${escapeHtml(meta.ogImage)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${escapeHtml(meta.siteUrl)}" />
    <meta property="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta property="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta property="twitter:image" content="${escapeHtml(meta.ogImage)}" />${telegramMeta ? `\n${telegramMeta}` : ''}`;

  return block;
}

function applyMetaBlock(html) {
  const block = buildMetaBlock();
  if (html.includes('<!-- WEDDING_META_START -->')) {
    return html.replace(
      /<!-- WEDDING_META_START -->[\s\S]*?<!-- WEDDING_META_END -->/,
      `<!-- WEDDING_META_START -->\n${block}\n    <!-- WEDDING_META_END -->`,
    );
  }
  return html;
}

function writeIndexHtml(outPath, { patchOnly = false } = {}) {
  const templatePaths = [
    resolve(rootDir, 'index.html.template'),
    '/index.html.template',
  ];
  const templatePath = templatePaths.find((p) => existsSync(p));

  let html;

  if (
    patchOnly &&
    existsSync(outPath) &&
    readFileSync(outPath, 'utf8').includes('<!-- WEDDING_META_START -->')
  ) {
    html = applyMetaBlock(readFileSync(outPath, 'utf8'));
  } else if (templatePath) {
    html = readFileSync(templatePath, 'utf8');
    const block = buildMetaBlock();
    html = html.replace(
      /<!-- WEDDING_META_START -->[\s\S]*?<!-- WEDDING_META_END -->/,
      `<!-- WEDDING_META_START -->\n${block}\n    <!-- WEDDING_META_END -->`,
    );
  } else if (existsSync(outPath)) {
    html = applyMetaBlock(readFileSync(outPath, 'utf8'));
  } else {
    throw new Error('Missing index.html.template');
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf8');
  console.log(`Wrote ${outPath}`);
}

const outPath = process.argv[2];
const mode = process.argv[3] || 'both';

if (mode === 'config') {
  writeWeddingConfig(
    outPath || resolve(rootDir, 'public/wedding-config.js'),
  );
} else if (mode === 'html') {
  writeIndexHtml(outPath || resolve(rootDir, 'index.html'), { patchOnly: true });
} else if (mode === 'both') {
  writeWeddingConfig(resolve(rootDir, 'public/wedding-config.js'));
  writeIndexHtml(resolve(rootDir, 'index.html'), { patchOnly: false });
} else {
  console.error(`Unknown mode: ${mode}. Use config, html, or both.`);
  process.exit(1);
}
