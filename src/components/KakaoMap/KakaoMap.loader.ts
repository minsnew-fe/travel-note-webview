const DEFAULT_ID = "KAKAO_MAP_LOADER";
const DEFAULT_SDK_URL = "//dapi.kakao.com/v2/maps/sdk.js";

// type MapLoadStatus = "INITIALIZED" | "LOADING" | "SUCCESS" | "FAILURE";

export interface LoaderOptions {
  appKey: string;
  id?: string;
  // default는 "//dapi.kakao.com/v2/maps/sdk.js"
  sdkUrl?: string;
}

class KakaoMapLoader {
  private static instance: LoaderOptions | null = null;

  constructor(options: LoaderOptions) {
    const newOptions = {
      appKey: options.appKey,
      id: options.id ?? DEFAULT_ID,
      sdkUrl: options.sdkUrl ?? DEFAULT_SDK_URL,
    };

    KakaoMapLoader.instance = newOptions;
  }

  public static getInstance = (): LoaderOptions | null => {
    if (!this.instance) {
      return null;
    }

    return this.instance;
  };
}

export default KakaoMapLoader;
