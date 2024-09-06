import { TypographyVariants, DefaultTypographyPropsVariants } from "../typings";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends DefaultTypographyPropsVariants {
    [TypographyVariants.INHERIT]: true;
    [TypographyVariants.SUBTITLE]: true;
    [TypographyVariants.USERNAME]: true;
    [TypographyVariants.CHIP]: true;
    [TypographyVariants.GRAPH_TITLE]: true;
    [TypographyVariants.GRAPH_VALUE]: true;
  }
}
