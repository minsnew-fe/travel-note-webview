import { PropsWithChildren } from "react";
import { KakaoMapProps } from "./KakaoMap.types";

const KakaoMap = (props: PropsWithChildren<KakaoMapProps>) => {
  const { id, children } = props;

  return <div id={id ?? "KAKAO_MAP"}>{children}</div>;
};

export default KakaoMap;
