/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField, TextField } from "@aws-amplify/ui-react";
import { Support } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SupportUpdateForm(props) {
  const {
    id: idProp,
    support: supportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    companyName: "",
    email: "",
    topic: "",
    updatedOn: "",
    openedOn: "",
    subject: "",
    details: "",
    status: "",
  };
  const [companyName, setCompanyName] = React.useState(initialValues.companyName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [topic, setTopic] = React.useState(initialValues.topic);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [openedOn, setOpenedOn] = React.useState(initialValues.openedOn);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [details, setDetails] = React.useState(initialValues.details);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = supportRecord ? { ...initialValues, ...supportRecord } : initialValues;
    setCompanyName(cleanValues.companyName);
    setEmail(cleanValues.email);
    setTopic(cleanValues.topic);
    setUpdatedOn(cleanValues.updatedOn);
    setOpenedOn(cleanValues.openedOn);
    setSubject(cleanValues.subject);
    setDetails(cleanValues.details);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [supportRecord, setSupportRecord] = React.useState(supportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Support, idProp) : supportModelProp;
      setSupportRecord(record);
    };
    queryData();
  }, [idProp, supportModelProp]);
  React.useEffect(resetStateValues, [supportRecord]);
  const validations = {
    companyName: [{ type: "Required" }],
    email: [{ type: "Required" }],
    topic: [{ type: "Required" }],
    updatedOn: [{ type: "Required" }],
    openedOn: [{ type: "Required" }],
    subject: [{ type: "Required" }],
    details: [{ type: "Required" }],
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
          companyName,
          email,
          topic,
          updatedOn,
          openedOn,
          subject,
          details,
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
          await DataStore.save(
            Support.copyOf(supportRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SupportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={true}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              email,
              topic,
              updatedOn,
              openedOn,
              subject,
              details,
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
              companyName,
              email: value,
              topic,
              updatedOn,
              openedOn,
              subject,
              details,
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
      <SelectField
        label="Topic"
        placeholder="Please select an option"
        isDisabled={false}
        value={topic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              email,
              topic: value,
              updatedOn,
              openedOn,
              subject,
              details,
              status,
            };
            const result = onChange(modelFields);
            value = result?.topic ?? value;
          }
          if (errors.topic?.hasError) {
            runValidationTasks("topic", value);
          }
          setTopic(value);
        }}
        onBlur={() => runValidationTasks("topic", topic)}
        errorMessage={errors.topic?.errorMessage}
        hasError={errors.topic?.hasError}
        {...getOverrideProps(overrides, "topic")}
      >
        <option children="Order" value="order" {...getOverrideProps(overrides, "topicoption0")}></option>
        <option
          children="Returns refunds"
          value="returnsRefunds"
          {...getOverrideProps(overrides, "topicoption1")}
        ></option>
        <option
          children="Technical issues"
          value="technicalIssues"
          {...getOverrideProps(overrides, "topicoption2")}
        ></option>
        <option children="Payments" value="payments" {...getOverrideProps(overrides, "topicoption3")}></option>
        <option
          children="Customer service"
          value="customerService"
          {...getOverrideProps(overrides, "topicoption4")}
        ></option>
        <option children="Security" value="security" {...getOverrideProps(overrides, "topicoption5")}></option>
        <option children="Feedback" value="feedback" {...getOverrideProps(overrides, "topicoption6")}></option>
        <option children="Other" value="other" {...getOverrideProps(overrides, "topicoption7")}></option>
      </SelectField>
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
              companyName,
              email,
              topic,
              updatedOn: value,
              openedOn,
              subject,
              details,
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
              companyName,
              email,
              topic,
              updatedOn,
              openedOn: value,
              subject,
              details,
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
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              email,
              topic,
              updatedOn,
              openedOn,
              subject: value,
              details,
              status,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
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
              companyName,
              email,
              topic,
              updatedOn,
              openedOn,
              subject,
              details: value,
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
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              email,
              topic,
              updatedOn,
              openedOn,
              subject,
              details,
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
        <option children="Active" value="active" {...getOverrideProps(overrides, "statusoption0")}></option>
        <option children="Maintenance" value="maintenance" {...getOverrideProps(overrides, "statusoption1")}></option>
        <option children="Inactive" value="inactive" {...getOverrideProps(overrides, "statusoption2")}></option>
      </SelectField>
      <Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}>
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || supportModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex gap="15px" {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={!(idProp || supportModelProp) || Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
