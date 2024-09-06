import { colorPalette } from "../colorPalette";
import { ChipVariants } from "../typings";

export const MuiChip = {
  styleOverrides: {
    root: {
      fontFamily: "Lexend",
      fontSize: 14,
      fontWeightLight: 600,
      color: colorPalette.primaryBlack,
    },
    [ChipVariants.PRIMARY]: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
};
