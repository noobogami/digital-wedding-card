// Wedding Card Configuration — EXAMPLE / TEMPLATE
//
// Local development:
//   Edit .env, then run `npm run dev` (syncs public/wedding-config.js from .env).
//   Defaults are in src/weddingDefaults.js.
//
// Docker / production:
//   Copy .env.example → .env, set WEDDING_* variables, then:
//   docker compose up -d --build
//   The container writes /wedding-config.js from those env vars at startup.
//
// Visual style: wedding uses gold/ivory/rose (rings). For engagement-style
// purple/pink hearts, set WEDDING_DECORATION=hearts in .env.

export { weddingDefaults as weddingConfig } from './weddingDefaults';
