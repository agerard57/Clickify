import React, { FC, ReactNode } from "react";

interface PanelProps {
  width?: number;
  height?: number;
  children: ReactNode;
  style?: React.CSSProperties;
}

export const Panel: FC<PanelProps> = ({ width, height, children, style }) => {
  const panelStyle = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
    backgroundColor: "white",
    boxShadow: "0 0 13px -3px rgba(0, 0, 0, 0.25)",
    padding: "10px",
    borderRadius: "9px",
  };

  return <div style={{ ...panelStyle, ...style, boxSizing: "border-box" }}>{children}</div>;
};
