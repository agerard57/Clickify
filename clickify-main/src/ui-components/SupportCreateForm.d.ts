/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";

export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type SupportCreateFormInputValues = {
  companyName?: string;
  email?: string;
  topic?: string;
  updatedOn?: string;
  openedOn?: string;
  subject?: string;
  details?: string;
  status?: string;
};
export declare type SupportCreateFormValidationValues = {
  companyName?: ValidationFunction<string>;
  email?: ValidationFunction<string>;
  topic?: ValidationFunction<string>;
  updatedOn?: ValidationFunction<string>;
  openedOn?: ValidationFunction<string>;
  subject?: ValidationFunction<string>;
  details?: ValidationFunction<string>;
  status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportCreateFormOverridesProps = {
  SupportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  companyName?: PrimitiveOverrideProps<TextFieldProps>;
  email?: PrimitiveOverrideProps<TextFieldProps>;
  topic?: PrimitiveOverrideProps<SelectFieldProps>;
  updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
  openedOn?: PrimitiveOverrideProps<TextFieldProps>;
  subject?: PrimitiveOverrideProps<TextFieldProps>;
  details?: PrimitiveOverrideProps<TextFieldProps>;
  status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SupportCreateFormProps = React.PropsWithChildren<
  {
    overrides?: SupportCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SupportCreateFormInputValues) => SupportCreateFormInputValues;
    onSuccess?: (fields: SupportCreateFormInputValues) => void;
    onError?: (fields: SupportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportCreateFormInputValues) => SupportCreateFormInputValues;
    onValidate?: SupportCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function SupportCreateForm(props: SupportCreateFormProps): React.ReactElement;
