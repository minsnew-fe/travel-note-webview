import { createContext } from "react";

export interface MapContextValue {
  map: kakao.maps.Map | null;
  initMap: (map: kakao.maps.Map) => void;
}

export const MapContext = createContext<MapContextValue>({
  map: null,
  initMap: () => undefined,
});
