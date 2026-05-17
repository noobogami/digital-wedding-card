/**
 * Navigation URLs for venue directions
 */

/**
 * Opens the device's maps app (Google Maps on most phones; app picker on many Android devices).
 * @see https://developers.google.com/maps/documentation/urls/get-started#directions-action
 */
export function buildNativeMapsDirectionsUrl({ latitude, longitude }) {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

/** Opens venue on Map.ir website / app */
export function buildMapIrNavigationUrl({ latitude, longitude, zoom = 16 }) {
  return `https://map.ir/lat/${latitude}/lng/${longitude}/z/${zoom}`;
}
