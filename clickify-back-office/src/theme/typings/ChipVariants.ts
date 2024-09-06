export type DefaultChipPropsVariants = {
  // Disable every default variant props
  filled: false;
  outlined: false;
};

/** This is the list of all the variants that we want to use in our app.
 * If you want to add a new variant, you have to add it here and in the
 * chip.d.ts file before setting the styleOverrides in muiTheme.ts
 */

export enum ChipVariants {
  PRIMARY = "primary",
}
