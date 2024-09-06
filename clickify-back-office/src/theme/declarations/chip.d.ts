import { ChipVariants, DefaultChipPropsVariants } from "../typings";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides extends DefaultChipPropsVariants {
    [ChipVariants.PRIMARY]: true;
  }
}
