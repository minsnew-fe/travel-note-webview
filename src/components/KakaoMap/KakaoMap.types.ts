export interface Position {
  lat: number;
  lng: number;
}

export type KakaoMapProps = {
  // 중심 좌표
  center: Position;

  // id
  id?: string;
  // zoom level
  level?: number;
  // max zoom level
  maxLevel?: number;
  // min zoom level
  minLevel?: number;
  // 지도 종류 (default: 일반 지도)
  mapTypeId?: kakao.maps.MapTypeId | keyof typeof kakao.maps.MapTypeId;

  // 생성 callback event
  onCreate?: (map: kakao.maps.Map) => void;
  // zoom level 변경 event
  onChangeLevel?: (target: kakao.maps.Map) => void;
  // center position 변경 event
  onChangeCenter?: (target: kakao.maps.Map) => void;
  // 지도 영역 변경 event
  onChangeBounds?: (target: kakao.maps.Map) => void;
  // map type 변경 event
  onChangeMapTypeId?: (target: kakao.maps.Map) => void;
  // 지도 클릭 event
  onClick?: (target: kakao.maps.Map, event: kakao.maps.MouseEvent) => void;
  // 지도 더블 클릭 event
  onDoubleClick?: (target: kakao.maps.Map, event: kakao.maps.MouseEvent) => void;
};
