/**
 * Opens the device's maps app (Google Maps on most phones; app picker on many Android devices).
 * @see https://developers.google.com/maps/documentation/urls/get-started#directions-action
 */
export function buildNativeMapsDirectionsUrl({ latitude, longitude }) {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}
