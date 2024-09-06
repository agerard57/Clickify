import { WebsiteSettings } from "@clickify/clickify-common";
import { lighten } from "@mui/material";
import { colorPalette } from "../colorPalette";
import { ButtonVariants } from "../typings";

export const muiButton = (colors: WebsiteSettings["colors"]) => ({
  styleOverrides: {
    root: {
      textTransform: "none" as const,
      fontFamily: "Lexend",
      fontSize: 14,
      height: 28,
      fontWeightLight: 400,
      color: colors.textColor,
    },
    [ButtonVariants.PRIMARY]: {
      color: colorPalette.white,
      padding: "0 30px",
      borderRadius: 23,
      background: `linear-gradient(225deg, ${colors.primary} 0%, ${lighten(colors.primary, 0.35)} 100%)`,
    },
    [ButtonVariants.TEXT]: {
      fontSize: 14,
      borderRadius: 23,
      minWidth: 0,
    },
    [ButtonVariants.THEME_COLOR]: {
      backgroundColor: "#ffffff",
      fontSize: 14,
      color: colors.primary,
      borderRadius: 7,
      minWidth: 0,
      "&:hover": {
        backgroundColor: "#ffffffd0",
      },
    },
  },
});
