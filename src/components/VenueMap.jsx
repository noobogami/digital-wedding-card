import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { weddingConfig } from '../config';
import { getMapirApiKey, getMapirMap } from '../mapirClient';

/** Mapbox often needs resize after 3D transforms or when the container was hidden. */
function resizeMap(map) {
  if (!map?.resize) return;
  map.resize();
  requestAnimationFrame(() => map.resize());
  window.setTimeout(() => map.resize(), 150);
  window.setTimeout(() => map.resize(), 500);
}

function createVenueMarkerElement() {
  const el = document.createElement('div');
  el.className = 'venue-map-marker';
  el.innerHTML = `
    <svg viewBox="0 0 24 36" width="28" height="42" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fill="#b91c1c" stroke="#7f1d1d" stroke-width="1" d="M12 1C6.5 1 2 5.5 2 11c0 8.5 10 23.5 10 23.5S22 19.5 22 11c0-5.5-4.5-10-10-10z"/>
      <circle fill="#fff" cx="12" cy="11" r="4.5"/>
    </svg>
  `;
  return el;
}

const VenueMap = ({ height = 140, ready = true }) => {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const { latitude, longitude } = weddingConfig.location.coordinates;
  const mapSettings = weddingConfig.location.map ?? {};
  const zoom = mapSettings.zoom ?? 16;
  const apiKey = getMapirApiKey();
  const Map = getMapirMap();

  useEffect(() => {
    if (!ready) {
      setMounted(false);
      mapRef.current = null;
      return undefined;
    }
    const timer = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timer);
  }, [ready]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return undefined;

    const observer = new ResizeObserver(() => {
      if (mapRef.current) resizeMap(mapRef.current);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(
    () => () => {
      markerRef.current?.remove();
      markerRef.current = null;
    },
    [],
  );

  const handleStyleLoad = (map) => {
    mapRef.current = map;
    resizeMap(map);

    markerRef.current?.remove();
    markerRef.current = new mapboxgl.Marker({
      element: createVenueMarkerElement(),
      anchor: 'bottom',
    })
      .setLngLat([longitude, latitude])
      .addTo(map);
  };

  if (!apiKey || !Map) {
    return (
      <div
        className="flex items-center justify-center rounded-xl border border-amber-200 bg-amber-50/80 text-center p-4"
        style={{ height }}
      >
        <p className="text-sm text-amber-900 font-vazir">
          کلید API نقشه را در <code className="text-xs">config.js</code> تنظیم کنید
          <br />
          <span className="text-xs text-amber-800">location.map.apiKey</span>
        </p>
      </div>
    );
  }

  if (!ready || !mounted) {
    return (
      <div
        className="venue-map-preview w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100"
        style={{ height, minHeight: height }}
        aria-hidden
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="venue-map-preview w-full rounded-xl overflow-hidden border border-gray-200 touch-pan-y"
      style={{ height, minHeight: height }}
    >
      <Mapir
        Map={Map}
        apiKey={apiKey}
        center={[longitude, latitude]}
        zoom={[zoom]}
        minZoom={10}
        containerStyle={{ height: '100%', width: '100%' }}
        scrollZoom
        dragPan
        doubleClickZoom
        touchZoomRotate
        trackResize
        onStyleLoad={handleStyleLoad}
      />
    </div>
  );
};

export default VenueMap;
