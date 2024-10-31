import { useContext } from "react";
import { MapContext } from "./mapContext";

const useMap = () => {
  const context = useContext(MapContext);

  return context;
};

export default useMap;
