/**
 * Map.ir navigation URLs
 * @see https://help.map.ir/mapp-showmap/
 */

/** Opens venue on Map.ir (navigation / full map) */
export function buildMapIrNavigationUrl({ latitude, longitude, zoom = 16 }) {
  return `https://map.ir/lat/${latitude}/lng/${longitude}/z/${zoom}`;
}
