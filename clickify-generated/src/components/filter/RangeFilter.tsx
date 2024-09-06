import React, { CSSProperties, FC, useState } from "react";
import { Box, Checkbox, FormControlLabel, Slider, Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";

interface RangeFilterProps {
  label: string;
  min: number;
  max: number;
  defaultMin: number;
  defaultMax: number;
  onChange?: (min: number, max: number) => void;
  style?: CSSProperties;
}

export const RangeFilter: FC<RangeFilterProps> = ({ label, min, max, defaultMin, defaultMax, onChange, style }) => {
  const [value, setValue] = useState<number[]>([defaultMin, defaultMax]);

  function handleChange(event: Event, newValue: number | number[]) {
    setValue(newValue as number[]);
  }

  function handleChangeCommitted(event: Event, newValue: number | number[]) {
    if (Array.isArray(newValue) && onChange) {
      onChange(newValue[0], newValue[1]);
    }
  }

  return (
    <Box style={{ margin: "20px 0", ...style }}>
      <Typography variant={TypographyVariants.WHITE} style={{ margin: "0.5rem" }}></Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChangeCommitted={handleChangeCommitted}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(text) => `${text}`}
        min={min}
        max={max}
      />
    </Box>
  );
};
