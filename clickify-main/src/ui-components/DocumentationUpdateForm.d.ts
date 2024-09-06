/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Documentation } from "../models";

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
export declare type DocumentationUpdateFormInputValues = {
  public?: boolean;
  title?: string;
  content?: string;
  updatedOn?: string;
};
export declare type DocumentationUpdateFormValidationValues = {
  public?: ValidationFunction<boolean>;
  title?: ValidationFunction<string>;
  content?: ValidationFunction<string>;
  updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentationUpdateFormOverridesProps = {
  DocumentationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  public?: PrimitiveOverrideProps<SwitchFieldProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  content?: PrimitiveOverrideProps<TextFieldProps>;
  updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DocumentationUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: DocumentationUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    documentation?: Documentation;
    onSubmit?: (fields: DocumentationUpdateFormInputValues) => DocumentationUpdateFormInputValues;
    onSuccess?: (fields: DocumentationUpdateFormInputValues) => void;
    onError?: (fields: DocumentationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DocumentationUpdateFormInputValues) => DocumentationUpdateFormInputValues;
    onValidate?: DocumentationUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function DocumentationUpdateForm(props: DocumentationUpdateFormProps): React.ReactElement;
