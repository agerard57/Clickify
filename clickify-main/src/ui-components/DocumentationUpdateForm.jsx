/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField, TextField } from "@aws-amplify/ui-react";
import { Documentation } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DocumentationUpdateForm(props) {
  const {
    id: idProp,
    documentation: documentationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    public: false,
    title: "",
    content: "",
    updatedOn: "",
  };
  const [public1, setPublic1] = React.useState(initialValues.public);
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = documentationRecord ? { ...initialValues, ...documentationRecord } : initialValues;
    setPublic1(cleanValues.public);
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setUpdatedOn(cleanValues.updatedOn);
    setErrors({});
  };
  const [documentationRecord, setDocumentationRecord] = React.useState(documentationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Documentation, idProp) : documentationModelProp;
      setDocumentationRecord(record);
    };
    queryData();
  }, [idProp, documentationModelProp]);
  React.useEffect(resetStateValues, [documentationRecord]);
  const validations = {
    public: [{ type: "Required" }],
    title: [{ type: "Required" }],
    content: [{ type: "Required" }],
    updatedOn: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, currentValue, getDisplayValue) => {
    const value = currentValue && getDisplayValue ? getDisplayValue(currentValue) : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          public: public1,
          title,
          content,
          updatedOn,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(...modelFields[fieldName].map((item) => runValidationTasks(fieldName, item)));
              return promises;
            }
            promises.push(runValidationTasks(fieldName, modelFields[fieldName]));
            return promises;
          }, []),
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Documentation.copyOf(documentationRecord, (updated) => {
              Object.assign(updated, modelFields);
            }),
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DocumentationUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Public"
        defaultChecked={false}
        isDisabled={false}
        isChecked={public1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              public: value,
              title,
              content,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.public ?? value;
          }
          if (errors.public?.hasError) {
            runValidationTasks("public", value);
          }
          setPublic1(value);
        }}
        onBlur={() => runValidationTasks("public", public1)}
        errorMessage={errors.public?.errorMessage}
        hasError={errors.public?.hasError}
        {...getOverrideProps(overrides, "public")}
      ></SwitchField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              public: public1,
              title: value,
              content,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              public: public1,
              title,
              content: value,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedOn && convertToLocal(new Date(updatedOn))}
        onChange={(e) => {
          let value = e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              public: public1,
              title,
              content,
              updatedOn: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedOn ?? value;
          }
          if (errors.updatedOn?.hasError) {
            runValidationTasks("updatedOn", value);
          }
          setUpdatedOn(value);
        }}
        onBlur={() => runValidationTasks("updatedOn", updatedOn)}
        errorMessage={errors.updatedOn?.errorMessage}
        hasError={errors.updatedOn?.hasError}
        {...getOverrideProps(overrides, "updatedOn")}
      ></TextField>
      <Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}>
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || documentationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex gap="15px" {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={!(idProp || documentationModelProp) || Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
