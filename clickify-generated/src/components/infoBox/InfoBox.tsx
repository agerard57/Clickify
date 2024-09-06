import React, { CSSProperties, FC } from "react";
import { Product } from "@/contexts/product/typing";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { grey } from "@mui/material/colors";
import { Price, PriceVariant } from "../Price";

interface InfoBoxProps {
  title: string;
  lines: string[];
  style?: CSSProperties;
}

export const InfoBox: FC<InfoBoxProps> = ({ title, lines, style }) => {
  return (
    <Box
      style={{
        margin: "1rem",
        padding: "0.5rem",
        width: "375px",
        boxShadow: "0 3px 4px 0 rgba(0, 0, 0, .05), 0 3px 4px 1.5px rgba(0, 0, 0, .05)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EFEFEF",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <Typography style={{ fontSize: "20px", fontWeight: "bold", margin: "0.75rem 0.5rem" }}>{title}</Typography>
      {lines.map((line, index) => (
        <Typography key={index} style={{ color: grey[700], margin: "0.25rem 0.5rem" }}>
          {line}
        </Typography>
      ))}
    </Box>
  );
};
