// eslint-disable-next-line import/no-internal-modules
import { Variant } from "@mui/material/styles/createTypography";

export type DefaultTypographyPropsVariants = {
  // Disable every default variant props
  [key in Variant]: false;
};

/** This is the list of all the variants that we want to use in our app.
 * If you want to add a new variant, you have to add it here and in the
 * typography.d.ts file before setting the styleOverrides in muiTheme.ts
 */

export enum TypographyVariants {
  INHERIT = "inherit",
  SUBTITLE = "subtitle",
  USERNAME = "username",
  CHIP = "chip",
  GRAPH_TITLE = "graphTitle",
  GRAPH_VALUE = "graphValue",
}
