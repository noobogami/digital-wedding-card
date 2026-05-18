import { mergeConfig } from './mergeConfig';
import { weddingDefaults } from './weddingDefaults';

const runtime =
  typeof window !== 'undefined' && window.__WEDDING_CONFIG__
    ? window.__WEDDING_CONFIG__
    : {};

/** Merged config: defaults ← runtime (Docker env via wedding-config.js) ← optional local file */
export const weddingConfig = mergeConfig(weddingDefaults, runtime);
