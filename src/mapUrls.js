/**
 * Navigation helpers — geo: opens the system app picker on Android;
 * on iOS we show a short list of popular map apps (iOS has no web geo picker).
 */

export function buildGoogleMapsDirectionsUrl({ latitude, longitude }) {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

/** Android / some devices: OS "Open with" dialog */
export function buildGeoDirectionsUrl({ latitude, longitude, label = '' }) {
  const query = label
    ? `${latitude},${longitude}(${label})`
    : `${latitude},${longitude}`;
  return `geo:0,0?q=${encodeURIComponent(query)}`;
}

/** Apps shown in the picker (deep links open installed apps when possible). */
export function getDirectionApps({ latitude, longitude, label = '' }) {
  const geoUrl = buildGeoDirectionsUrl({ latitude, longitude, label });

  return [
    {
      id: 'google',
      name: 'Google Maps',
      href: buildGoogleMapsDirectionsUrl({ latitude, longitude }),
    },
    {
      id: 'waze',
      name: 'Waze',
      href: `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
    },
    {
      id: 'apple',
      name: 'Apple Maps',
      href: `https://maps.apple.com/?daddr=${latitude},${longitude}`,
    },
    {
      id: 'neshan',
      name: 'نشان',
      href: `https://neshan.org/maps/routing?destination=${latitude},${longitude}`,
    },
    {
      id: 'balad',
      name: 'بلد',
      href: `https://balad.ir/directions?destination=${latitude},${longitude}`,
    },
    {
      id: 'other',
      name: 'سایر برنامه‌ها',
      href: geoUrl,
      description: 'انتخاب از برنامه‌های نصب‌شده',
    },
  ];
}

export function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

/** Desktop: Google Maps in a new tab. Mobile: use DirectionsButton picker. */
export function openDirections({ latitude, longitude, label = '' }) {
  if (isMobileDevice()) {
    if (isAndroid()) {
      window.location.assign(buildGeoDirectionsUrl({ latitude, longitude, label }));
      return;
    }
    return false;
  }

  window.open(
    buildGoogleMapsDirectionsUrl({ latitude, longitude }),
    '_blank',
    'noopener,noreferrer',
  );
  return true;
}
