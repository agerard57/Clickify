/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField, TextField } from "@aws-amplify/ui-react";
import { Demos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DemosCreateForm(props) {
  const { clearOnSuccess = true, onSuccess, onError, onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    details: "",
    openedOn: "",
    updatedOn: "",
    status: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [companyName, setCompanyName] = React.useState(initialValues.companyName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNumber, setPhoneNumber] = React.useState(initialValues.phoneNumber);
  const [details, setDetails] = React.useState(initialValues.details);
  const [openedOn, setOpenedOn] = React.useState(initialValues.openedOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCompanyName(initialValues.companyName);
    setEmail(initialValues.email);
    setPhoneNumber(initialValues.phoneNumber);
    setDetails(initialValues.details);
    setOpenedOn(initialValues.openedOn);
    setUpdatedOn(initialValues.updatedOn);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    companyName: [{ type: "Required" }],
    email: [{ type: "Required" }],
    phoneNumber: [{ type: "Required" }],
    details: [{ type: "Required" }],
    openedOn: [{ type: "Required" }],
    updatedOn: [{ type: "Required" }],
    status: [{ type: "Required" }],
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
          name,
          companyName,
          email,
          phoneNumber,
          details,
          openedOn,
          updatedOn,
          status,
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
          await DataStore.save(new Demos(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DemosCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              companyName,
              email,
              phoneNumber,
              details,
              openedOn,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={true}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              companyName: value,
              email,
              phoneNumber,
              details,
              openedOn,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              companyName,
              email: value,
              phoneNumber,
              details,
              openedOn,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              companyName,
              email,
              phoneNumber: value,
              details,
              openedOn,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={true}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              companyName,
              email,
              phoneNumber,
              details: value,
              openedOn,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextField>
      <TextField
        label="Opened on"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={openedOn && convertToLocal(new Date(openedOn))}
        onChange={(e) => {
          let value = e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              companyName,
              email,
              phoneNumber,
              details,
              openedOn: value,
              updatedOn,
              status,
            };
            const result = onChange(modelFields);
            value = result?.openedOn ?? value;
          }
          if (errors.openedOn?.hasError) {
            runValidationTasks("openedOn", value);
          }
          setOpenedOn(value);
        }}
        onBlur={() => runValidationTasks("openedOn", openedOn)}
        errorMessage={errors.openedOn?.errorMessage}
        hasError={errors.openedOn?.hasError}
        {...getOverrideProps(overrides, "openedOn")}
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
              name,
              companyName,
              email,
              phoneNumber,
              details,
              openedOn,
              updatedOn: value,
              status,
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
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              companyName,
              email,
              phoneNumber,
              details,
              openedOn,
              updatedOn,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option children="Waiting" value="waiting" {...getOverrideProps(overrides, "statusoption0")}></option>
        <option children="In progress" value="inProgress" {...getOverrideProps(overrides, "statusoption1")}></option>
        <option children="Done" value="done" {...getOverrideProps(overrides, "statusoption2")}></option>
        <option children="Cancelled" value="cancelled" {...getOverrideProps(overrides, "statusoption3")}></option>
      </SelectField>
      <Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}>
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex gap="15px" {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
