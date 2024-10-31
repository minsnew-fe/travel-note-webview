import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { MapContext, MapContextValue } from "./mapContext";

const MapProvider = ({ children }: PropsWithChildren) => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  const initMap = useCallback((m: kakao.maps.Map) => {
    setMap(m);
  }, []);

  const contextValue = useMemo<MapContextValue>(
    () => ({ map, initMap }),
    [map, initMap]
  );

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

export default MapProvider;
