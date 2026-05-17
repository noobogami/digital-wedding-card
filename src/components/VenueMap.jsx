import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { weddingConfig } from '../config';
import {
  MAP_IR_MARKER_URL,
  MAP_IR_STYLE_URL,
  createMapirTransformRequest,
  getMapirApiKey,
} from '../mapirClient';

function resizeMap(map) {
  if (!map?.resize) return;
  map.resize();
  requestAnimationFrame(() => map.resize());
  window.setTimeout(() => map.resize(), 150);
  window.setTimeout(() => map.resize(), 500);
}

function createMapIrMarkerElement() {
  const el = document.createElement('div');
  const img = document.createElement('img');
  img.src = MAP_IR_MARKER_URL;
  img.alt = '';
  img.style.width = '2.5rem';
  img.style.height = 'auto';
  img.draggable = false;
  el.appendChild(img);
  return el;
}

const VenueMap = ({ height = 140, ready = true }) => {
  const wrapperRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const { latitude, longitude } = weddingConfig.location.coordinates;
  const mapSettings = weddingConfig.location.map ?? {};
  const zoom = mapSettings.zoom ?? 16;
  const apiKey = getMapirApiKey();

  useEffect(() => {
    if (!ready) {
      setMounted(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timer);
  }, [ready]);

  useEffect(() => {
    if (!mounted || !mapContainerRef.current || !apiKey) return undefined;

    mapboxgl.accessToken = apiKey;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: MAP_IR_STYLE_URL,
      center: [longitude, latitude],
      zoom,
      minZoom: 10,
      transformRequest: createMapirTransformRequest(apiKey),
      attributionControl: false,
    });

    const marker = new mapboxgl.Marker({
      element: createMapIrMarkerElement(),
      anchor: 'bottom',
    })
      .setLngLat([longitude, latitude])
      .addTo(map);

    map.on('load', () => resizeMap(map));
    mapRef.current = map;

    const observer = new ResizeObserver(() => resizeMap(map));
    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
      marker.remove();
      map.remove();
      mapRef.current = null;
    };
  }, [mounted, apiKey, latitude, longitude, zoom]);

  if (!apiKey) {
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
      ref={wrapperRef}
      className="venue-map-preview w-full rounded-xl overflow-hidden border border-gray-200 touch-pan-y"
      style={{ height, minHeight: height }}
    >
      <div ref={mapContainerRef} className="h-full w-full" />
    </div>
  );
};

export default VenueMap;
