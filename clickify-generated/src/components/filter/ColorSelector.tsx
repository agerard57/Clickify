import React, { FC, useState } from "react";
import { Typography } from "@mui/material";

interface ColorSelectorProps {
  label: string;
  colors: string[];
  defaultColor?: string;
  onChange?: (selectedColor: string) => void;
}

export const ColorSelector: FC<ColorSelectorProps> = ({ label, colors, defaultColor, onChange }) => {
  const [selected, setSelected] = useState(defaultColor);

  const handleColorChange = (color: string) => {
    setSelected(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div>
      <Typography style={{ fontSize: "18px", marginBottom: "5px" }}>{label}</Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: color,
              boxShadow: selected === color ? "inset 0 0 10px #fff" : "none",
              margin: "5px",
              cursor: "pointer",
              transition: "box-shadow 0.3s",
            }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};
