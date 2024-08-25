import { useEffect, useState } from "react";

const MapPage = () => {
  const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map>();

  const initializeMap = () => {
    kakao.maps.load(() => {
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
    });
  };

  const initializeNaverMap = () => {
    const container = document.getElementById("naver-map");
    if (container) {
      const location = new window.naver.maps.LatLng(33.450701, 126.570667);
      const map = new window.naver.maps.Map(container, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
    }
  };

  const loadKakaoMap = () => {
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
    loadKakaoMap();
  }, []);

  // useEffect(() => {
  //   initializeMap();
  //   initializeNaverMap();
  // }, [window.kakao]);

  return (
    <div className="h-full w-screen">
      <div>Map Page</div>
      <div id="map" className="w-[500px] h-[500px]" />
      <div id="naver-map" className="w-[500px] h-[500px]" />
    </div>
  );
};

export default MapPage;
