import React, { FC } from "react";
import { Tooltip, Typography, useTheme } from "@mui/material";

export enum TickTitleVariant {
  Bold = "bold",
  ThemeColor = "theme-color",
  WithIconStart = "with-icon-start",
  WithIconEnd = "with-icon-end",
}

interface TickTitleProps {
  title?: string;
  children: React.ReactNode;
  variant?: TickTitleVariant;
  icon?: string;
}

export const TickTitle: FC<TickTitleProps> = ({ title, children, variant, icon }) => {
  const theme = useTheme();

  // let iconElement: JSX.Element | null = null;
  const customStyles: React.CSSProperties = {};

  switch (variant) {
    case TickTitleVariant.Bold:
      customStyles.fontWeight = "bold";
      break;
    case TickTitleVariant.ThemeColor:
      customStyles.color = theme.palette.primary.main;
      customStyles.fontWeight = "bold";
      customStyles.fontSize = "16px";
      break;
    // TODO
    // case TickTitleVariant.WithIconStart:
    //   break;
    // case TickTitleVariant.WithIconEnd:
    //   break;
    default:
  }

  return (
    <Tooltip title={title}>
      <Typography style={customStyles}>{children}</Typography>
    </Tooltip>
  );
};
