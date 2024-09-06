/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Demos } from "../models";

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
export declare type DemosUpdateFormInputValues = {
  name?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  details?: string;
  openedOn?: string;
  updatedOn?: string;
  status?: string;
};
export declare type DemosUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  companyName?: ValidationFunction<string>;
  email?: ValidationFunction<string>;
  phoneNumber?: ValidationFunction<string>;
  details?: ValidationFunction<string>;
  openedOn?: ValidationFunction<string>;
  updatedOn?: ValidationFunction<string>;
  status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DemosUpdateFormOverridesProps = {
  DemosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  companyName?: PrimitiveOverrideProps<TextFieldProps>;
  email?: PrimitiveOverrideProps<TextFieldProps>;
  phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
  details?: PrimitiveOverrideProps<TextFieldProps>;
  openedOn?: PrimitiveOverrideProps<TextFieldProps>;
  updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
  status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DemosUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: DemosUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    demos?: Demos;
    onSubmit?: (fields: DemosUpdateFormInputValues) => DemosUpdateFormInputValues;
    onSuccess?: (fields: DemosUpdateFormInputValues) => void;
    onError?: (fields: DemosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DemosUpdateFormInputValues) => DemosUpdateFormInputValues;
    onValidate?: DemosUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function DemosUpdateForm(props: DemosUpdateFormProps): React.ReactElement;
