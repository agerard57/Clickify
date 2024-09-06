import { MuiButton, MuiTypography } from "./styles";
import { MuiChip } from "./styles/MuiChip";

export const muiTheme = {
  palette: {
    primary: {
      main: "#620000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiChip,
    MuiTypography,
    MuiButton,
  },
} as const;
