import Mapir from 'mapir-react-component';
import { weddingConfig } from './config';

let mapirMap = null;

/** Map.ir map factory (requires location.map.apiKey in config). */
export function getMapirMap() {
  const apiKey = weddingConfig.location.map?.apiKey?.trim();
  if (!apiKey) {
    return null;
  }

  if (!mapirMap) {
    mapirMap = Mapir.setToken({
      transformRequest: (url) => ({
        url,
        headers: {
          'x-api-key': apiKey,
          'Mapir-SDK': 'reactjs',
        },
      }),
    });
  }

  return mapirMap;
}

export function getMapirApiKey() {
  return weddingConfig.location.map?.apiKey?.trim() || '';
}
