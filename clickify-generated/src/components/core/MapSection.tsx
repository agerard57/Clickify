import React, { CSSProperties, FC } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import { useMapSection } from "@/hooks/core/MapSection";

type Props = {
  tripCoordinates: {
    position: [number, number];
  };
  style?: CSSProperties;
};

export const MapSection: FC<Props> = ({ tripCoordinates, style }) => {
  useMapSection(tripCoordinates);
  return (
    <div
      className="mapWrapper"
      id="map"
      style={{
        minHeight: "250px",
        minWidth: "450px",
        borderRadius: "10px",
        ...style,
      }}
    />
  );
};
