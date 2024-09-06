/** *************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 ************************************************************************* */

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";

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
export declare type DocumentationCreateFormInputValues = {
  public?: boolean;
  title?: string;
  content?: string;
  updatedOn?: string;
};
export declare type DocumentationCreateFormValidationValues = {
  public?: ValidationFunction<boolean>;
  title?: ValidationFunction<string>;
  content?: ValidationFunction<string>;
  updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentationCreateFormOverridesProps = {
  DocumentationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  public?: PrimitiveOverrideProps<SwitchFieldProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  content?: PrimitiveOverrideProps<TextFieldProps>;
  updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DocumentationCreateFormProps = React.PropsWithChildren<
  {
    overrides?: DocumentationCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DocumentationCreateFormInputValues) => DocumentationCreateFormInputValues;
    onSuccess?: (fields: DocumentationCreateFormInputValues) => void;
    onError?: (fields: DocumentationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DocumentationCreateFormInputValues) => DocumentationCreateFormInputValues;
    onValidate?: DocumentationCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function DocumentationCreateForm(props: DocumentationCreateFormProps): React.ReactElement;
