import { createTheme } from "@mui/material";
import { WebsiteSettings } from "@clickify/clickify-common";
import { muiTheme } from "./muiTheme";
import { appTheme } from "./appTheme";

export const theme = (colors: WebsiteSettings["colors"]) => createTheme(muiTheme(colors), appTheme);
