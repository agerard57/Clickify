import React, { CSSProperties, FC, useState } from "react";
import { Select, MenuItem, InputLabel, SelectChangeEvent, Box, Typography } from "@mui/material";
import { height } from "dom-helpers";
import { fontGrid } from "@mui/material/styles/cssUtils";

interface CustomSelectProps {
  choices: string[];
  defaultChoice: string;
  label?: string;
  onChange?: (choice: string) => void;
  style?: CSSProperties;
}

export const CustomSelect: FC<CustomSelectProps> = ({ choices, defaultChoice, label, onChange, style }) => {
  const [selectedChoice, setSelectedChoice] = useState(defaultChoice);

  function handleChange(event: SelectChangeEvent<string>) {
    setSelectedChoice(event.target.value as string);
    if (onChange) {
      onChange(event.target.value as string);
    }
  }

  return (
    <Box
      style={{
        ...style,
      }}
    >
      {label ? <Typography style={{ fontSize: "18px", color: "black", margin: "0.5rem" }}>{label}</Typography> : null}

      <Select
        value={selectedChoice}
        onChange={handleChange}
        style={{ width: "100%", margin: "0.5rem", padding: "0", height: "35px" }}
      >
        {choices.map((choice) => (
          <MenuItem key={choice} value={choice}>
            {choice}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
