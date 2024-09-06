/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Support } from "../models";

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
export declare type SupportUpdateFormInputValues = {
  companyName?: string;
  email?: string;
  topic?: string;
  updatedOn?: string;
  openedOn?: string;
  subject?: string;
  details?: string;
  status?: string;
};
export declare type SupportUpdateFormValidationValues = {
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
export declare type SupportUpdateFormOverridesProps = {
  SupportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  companyName?: PrimitiveOverrideProps<TextFieldProps>;
  email?: PrimitiveOverrideProps<TextFieldProps>;
  topic?: PrimitiveOverrideProps<SelectFieldProps>;
  updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
  openedOn?: PrimitiveOverrideProps<TextFieldProps>;
  subject?: PrimitiveOverrideProps<TextFieldProps>;
  details?: PrimitiveOverrideProps<TextFieldProps>;
  status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SupportUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: SupportUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    support?: Support;
    onSubmit?: (fields: SupportUpdateFormInputValues) => SupportUpdateFormInputValues;
    onSuccess?: (fields: SupportUpdateFormInputValues) => void;
    onError?: (fields: SupportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportUpdateFormInputValues) => SupportUpdateFormInputValues;
    onValidate?: SupportUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function SupportUpdateForm(props: SupportUpdateFormProps): React.ReactElement;
