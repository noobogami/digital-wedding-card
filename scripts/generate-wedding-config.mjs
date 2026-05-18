#!/usr/bin/env node
/**
 * Writes window.__WEDDING_CONFIG__ from WEDDING_* environment variables.
 * Used at container start (Docker) so each deployment can override defaults.
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const outPath = process.argv[2] || '/usr/share/nginx/html/wedding-config.js';

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

function setNested(target, path, value) {
  let cur = target;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!cur[key] || typeof cur[key] !== 'object') cur[key] = {};
    cur = cur[key];
  }
  cur[path[path.length - 1]] = value;
}

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
  ['WEDDING_MESSAGE_COUPLE_NAMES', ['message', 'coupleNames']],
  ['WEDDING_MESSAGE_BODY', ['message', 'body']],
  ['WEDDING_ENVELOPE_IMAGE', ['envelope', 'image']],
  ['WEDDING_ENVELOPE_ALT', ['envelope', 'alt']],
  ['WEDDING_MUSIC_SRC', ['music', 'src']],
  ['WEDDING_DECORATION', ['theme', 'decoration']],
];

for (const [envKey, path] of mappings) {
  let value = env(envKey);
  if (value === undefined) continue;
  // Allow literal \n in env values (docker-compose / .env)
  value = value.replace(/\\n/g, '\n');
  setNested(config, path, value);
}

const lat = env('WEDDING_LATITUDE');
const lng = env('WEDDING_LONGITUDE');
if (lat !== undefined) setNested(config, ['location', 'coordinates', 'latitude'], Number(lat));
if (lng !== undefined) setNested(config, ['location', 'coordinates', 'longitude'], Number(lng));

const volume = env('WEDDING_MUSIC_VOLUME');
if (volume !== undefined) {
  setNested(config, ['music', 'defaultVolume'], Number(volume));
}

const js = `window.__WEDDING_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, js, 'utf8');
console.log(`Wrote ${outPath}`);
