import React, { CSSProperties, FC, useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

interface CheckBoxState {
  label: string;
  checked: boolean;
}

interface MultiCheckBoxFilterProps {
  label: string;
  checkbox: CheckBoxState[];
  onChange?: (CheckboxState: CheckBoxState[]) => void;
  checkboxColor?: string;
  style?: CSSProperties;
}

export const MultiCheckBoxFilter: FC<MultiCheckBoxFilterProps> = ({
  label,
  checkbox,
  onChange,
  checkboxColor = "default",
  style,
}) => {
  const [currentCheckbox, setCurrentCheckbox] = useState(checkbox);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckbox = [...currentCheckbox];
    newCheckbox[index].checked = checked;
    setCurrentCheckbox(newCheckbox);
    if (onChange) {
      onChange(newCheckbox);
    }
  };

  return (
    <div style={{ margin: "20px 0", ...style }}>
      <Typography style={{ fontSize: "18px", color: "black", margin: "0.5rem" }}>{label}</Typography>
      {currentCheckbox.map((cb, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={cb.checked}
              onChange={(event) => handleCheckboxChange(index, event.target.checked)}
              style={{ color: checkboxColor }}
            />
          }
          label={cb.label}
        />
      ))}
    </div>
  );
};
