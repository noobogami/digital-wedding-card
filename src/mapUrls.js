/**
 * Map.ir embed & navigation URLs
 * @see https://help.map.ir/mapp-showmap/
 * @see https://help.map.ir/iframe-map/
 */

/** Interactive map iframe (no API key required) */
export function buildMapIrEmbedUrl({ latitude, longitude, zoom = 16, markerLabel = '' }) {
  const base = `https://map.ir/lat/${latitude}/lng/${longitude}/z/${zoom}`;
  if (markerLabel?.trim()) {
    return `${base}/p/${encodeURIComponent(markerLabel.trim())}`;
  }
  return base;
}

/** Opens venue on Map.ir (navigation / full map) */
export function buildMapIrNavigationUrl({ latitude, longitude, zoom = 16 }) {
  return `https://map.ir/lat/${latitude}/lng/${longitude}/z/${zoom}`;
}
