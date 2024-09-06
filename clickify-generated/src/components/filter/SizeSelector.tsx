import React, { FC, useState } from "react";
import { Typography } from "@mui/material";

interface SizeSelectorProps {
  label: string;
  sizeList: string[];
  defaultSize?: string;
  onChange?: (selectedSize: string) => void;
  filledColor?: string;
}

export const SizeSelector: FC<SizeSelectorProps> = ({
  label,
  sizeList,
  defaultSize,
  onChange,
  filledColor = "#0057a7",
}) => {
  const [selected, setSelected] = useState(defaultSize);

  const handleSizeChange = (size: string) => {
    setSelected(size);
    if (onChange) {
      onChange(size);
    }
  };

  return (
    <div>
      <Typography style={{ fontSize: "18px", color: "black", margin: "0.5rem" }}>{label}</Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {sizeList.map((size, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #8a8a8a",
              borderRadius: "30%",
              backgroundColor: selected === size ? filledColor : "transparent",
              color: selected === size ? "#fff" : "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};
