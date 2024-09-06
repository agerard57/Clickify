import React, { CSSProperties, FC } from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

interface CheckBoxFilterProps {
  defaultChecked: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
  checkboxColor?: string;
  style?: CSSProperties;
}

export const CheckBoxFilter: FC<CheckBoxFilterProps> = ({
  defaultChecked,
  label,
  onChange,
  checkboxColor = "default",
  style,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <Box style={{ margin: "20px 0", ...style }}>
      <FormControlLabel
        control={
          <Checkbox defaultChecked={defaultChecked} onChange={handleCheckboxChange} style={{ color: checkboxColor }} />
        }
        label={label}
      />
    </Box>
  );
};
