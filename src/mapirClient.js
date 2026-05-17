import { weddingConfig } from './config';

/** Map.ir vector style (Mapbox GL compatible) */
export const MAP_IR_STYLE_URL =
  'https://map.ir/vector/styles/main/mapir-xyz-style.json';

export const MAP_IR_MARKER_URL =
  'https://map.ir/css/images/marker-default-red.svg';

export function getMapirApiKey() {
  return weddingConfig.location.map?.apiKey?.trim() || '';
}

/** Attach API key to all Map.ir tile/style requests */
export function createMapirTransformRequest(apiKey) {
  return (url) => ({
    url,
    headers: {
      'x-api-key': apiKey,
      'Mapir-SDK': 'reactjs',
    },
  });
}
