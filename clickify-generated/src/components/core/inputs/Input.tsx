import React, { CSSProperties, FC } from "react";
import { FormControl, InputBase, InputLabel, alpha, styled } from "@mui/material";

interface InputProps {
  placeholder?: string;
  label?: string;
  style?: CSSProperties;
  labelStyle?: CSSProperties;
}

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "10px",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 12,
    padding: "2px 12px",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Input: FC<InputProps> = ({ placeholder, label, style, labelStyle }) => {
  return (
    <FormControl variant="standard" style={{ width: "100%", ...style }}>
      <InputLabel shrink htmlFor="bootstrap-input" style={labelStyle}>
        {label}
      </InputLabel>
      {/* <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" /> */}
      <StyledInput placeholder={placeholder} fullWidth />
    </FormControl>
  );
};
