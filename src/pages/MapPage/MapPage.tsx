import KakaoMap from "../../components/Map/KakaoMap";

const MapPage = () => {
  // const initializeNaverMap = () => {
  //   const container = document.getElementById("naver-map");
  //   if (container) {
  //     const location = new window.naver.maps.LatLng(33.450701, 126.570667);
  //     const map = new window.naver.maps.Map(container, {
  //       center: location,
  //       zoom: 15, // 지도 확대 정도
  //     });
  //   }
  // };

  // useEffect(() => {
  //   initializeMap();
  //   initializeNaverMap();
  // }, [window.kakao]);

  return (
    <div className="h-full w-screen">
      <div>Map Page</div>
      {/* <div id="map" className="w-[500px] h-[500px]" /> */}
      {/* <div id="naver-map" className="w-[500px] h-[500px]" /> */}
      <KakaoMap />
    </div>
  );
};

export default MapPage;
