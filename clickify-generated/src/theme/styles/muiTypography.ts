import { WebsiteSettings } from "@clickify/clickify-common";
import { colorPalette } from "../colorPalette";
import { TypographyVariants } from "../typings";

export const muiTypography = (colors: WebsiteSettings["colors"]) => ({
  styleOverrides: {
    root: {
      fontFamily: "Lexend",
      fontSize: 14,
      fontWeightLight: 600,
      color: colors.textColor,
    },
    [TypographyVariants.TITLE]: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "1px",
    },
    [TypographyVariants.WHITE]: `
      color: ${colorPalette.white} !important;
      font-size: 12px;
    `,
  },
});
