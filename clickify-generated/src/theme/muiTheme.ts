import { WebsiteSettings } from "@clickify/clickify-common";
import { muiButton, muiTypography } from "./styles";

export const muiTheme = (colors: WebsiteSettings["colors"]) =>
  ({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: "#ffffff",
      },
    },
    components: {
      MuiTypography: muiTypography(colors),
      MuiButton: muiButton(colors),
    },
  } as const);
