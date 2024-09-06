import { colorPalette } from "../colorPalette";
import { TypographyVariants } from "../typings";

export const MuiTypography = {
  styleOverrides: {
    root: {
      fontFamily: "Lexend",
      fontSize: 14,
      fontWeightLight: 600,
      color: colorPalette.primaryBlack,
    },
    [TypographyVariants.USERNAME]: {
      fontSize: 14,
      fontWeight: 400,
    },
    [TypographyVariants.SUBTITLE]: {
      fontSize: 11,
      fontWeight: 400,
      color: colorPalette.grey,
      letterSpacing: 1,
    },
    [TypographyVariants.CHIP]: {
      fontSize: 10,
      fontWeight: 600,
      color: colorPalette.white,
      letterSpacing: 0.5,
    },
    [TypographyVariants.GRAPH_TITLE]: {
      fontSize: 10,
      fontWeight: 600,
      color: colorPalette.grey,
      textTransform: "uppercase",
    },
    [TypographyVariants.GRAPH_VALUE]: {
      fontSize: 15,
      fontWeight: 900,
    },
  },
};
