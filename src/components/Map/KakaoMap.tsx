import { useEffect } from "react";
import useMap from "./useMap";

const KakaoMap = () => {
  const { initMap } = useMap();

  const initializeMap = () => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      if (container) {
        const map = new window.kakao.maps.Map(container, options);
        initMap(map);
      }
    });
  };

  const loadScript = () => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4423af2f500b7c83046402a32a7f65c9&autoload=false";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initializeMap();
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    loadScript();
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KakaoMap;
