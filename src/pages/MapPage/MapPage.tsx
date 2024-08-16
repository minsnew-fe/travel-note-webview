import { useEffect, useState } from "react";

const MapPage = () => {
  const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map>();

  const initializeMap = () => {
    const container = document.getElementById("map");

    console.log("AAAa", window?.kakao?.maps);
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    if (container) {
      const map = new window.kakao.maps.Map(container, options);
      setKakaoMap(map);
    }
  };

  useEffect(() => {
    initializeMap();
  }, [window.kakao]);

  return (
    <div className="h-full w-screen">
      <div>Map Page</div>
      <div id="map" className="w-full h-full" />
    </div>
  );
};

export default MapPage;
