import React, { CSSProperties, FC } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import { useMapSection } from "../hooks/useMapSection";

type Props = { style?: CSSProperties };

export const MapSection: FC<Props> = ({ style }) => {
  useMapSection();
  return (
    <div
      className="mapWrapper"
      id="map"
      style={{
        minHeight: "350px",
        minWidth: "450px",
        borderRadius: "10px",
        ...style,
      }}
    />
  );
};
