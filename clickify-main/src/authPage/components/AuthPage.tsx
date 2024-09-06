import React, { FC, KeyboardEvent, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { TextField } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { Button, Typography } from "@mui/material";

import { Auth } from "@aws-amplify/auth";

import { AuthPages } from "../typings";
import { AuthLayout } from "./layout";

interface InputsProps {
  email: string;
  password: string | ReactNode;
  repeatPassword: string;
  confirmationCode: string;
}

export const AuthPage: FC = () => {
  const { t } = useTranslation("AuthPage");
  const location = useLocation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<InputsProps>({
    email: "",
    password: "",
    repeatPassword: "",
    confirmationCode: "",
  });

  const [inputsError, setInputsError] = useState<InputsProps>({
    email: "",
    password: "",
    repeatPassword: "",
    confirmationCode: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState("");
  const [authSuccessText, setAuthSuccessText] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const pageParam = queryParams.get("page") as AuthPages;
  const currentlySelected =
    pageParam === "login" ? AuthPages.LOGIN : pageParam === "signUp" ? AuthPages.SIGN_UP : AuthPages.SIGN_UP;

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  useEffect(() => {
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      confirmationCode: "",
    });
    setInputsError({
      email: "",
      password: "",
      repeatPassword: "",
      confirmationCode: "",
    });
  }, [pageParam]);

  const isButtonDisabled =
    inputs.email === "" ||
    inputs.password === "" ||
    (currentlySelected === AuthPages.SIGN_UP && inputs.repeatPassword === "") ||
    Object.values(inputsError).some((error) => error !== "");

  const onSubmit = () => {
    if (isWaitingForConfirmation) {
      Auth.confirmSignUp(inputs.email, inputs.confirmationCode)
        .then(() => {
          setIsAuthenticated(true);
          setIsWaitingForConfirmation(false);
          Auth.signIn({
            username: inputs.email,
            password: inputs.password as string,
          })
            .then(() => {
              setIsAuthenticated(true);
              setAuthSuccessText(t("auth.success"));
              navigate("/");
            })
            .catch((error) => {
              setLoginErrorText(error.message);
              console.error(error);
            });
        })
        .catch((error) => {
          setLoginErrorText(error.message);
          console.error(error);
        });
      return;
    }
    if (currentlySelected === AuthPages.LOGIN) {
      Auth.signIn({
        username: inputs.email,
        password: inputs.password as string,
      })
        .then(() => {
          setIsAuthenticated(true);
          setAuthSuccessText(t("auth.success"));
          navigate("/");
        })
        .catch((error) => {
          setLoginErrorText(error.message);
          console.error(error);
        });
    } else if (currentlySelected === AuthPages.SIGN_UP) {
      Auth.signUp({
        username: inputs.email,
        password: inputs.password as string,
        attributes: {
          email: inputs.email,
        },
      })
        .then(() => {
          setIsAuthenticated(true);
          setIsWaitingForConfirmation(true);
          setAuthSuccessText(t("auth.confirmation"));
        })
        .catch((error: any) => {
          setLoginErrorText(error.message);
          console.error(error);
        });
    }
  };

  console.log(inputsError);

  const onButtonKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !isButtonDisabled) {
      onSubmit();
    }
  };

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, email: e.target.value });

    if (!emailRegex.test(e.target.value)) {
      setInputsError({ ...inputsError, email: "Invalid email format" }); // TODO Translations
    } else {
      setInputsError({ ...inputsError, email: "" });
    }
  };

  const onConfirmCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, confirmationCode: e.target.value });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, password: e.target.value });

    const errors: ReactNode[] = [];

    if (e.target.value.length < 8) {
      errors.push(`- ${t("errors.passwordLength")}`);
    }
    if (!/[a-z]/.test(e.target.value)) {
      errors.push(`- ${t("errors.passwordLowercase")}`);
    }
    if (!/[A-Z]/.test(e.target.value)) {
      errors.push(`- ${t("errors.passwordUppercase")}`);
    }
    if (!/\d/.test(e.target.value)) {
      errors.push(`- ${t("errors.passwordNumber")}`);
    }
    if (!/[@$!%*?&]/.test(e.target.value)) {
      errors.push(`- ${t("errors.passwordSpecialCharacter")}`);
    }

    if (errors.length) {
      setInputsError({ ...inputsError, password: errors.join("\r\n") });
    } else {
      setInputsError({ ...inputsError, password: "" });
    }
  };

  const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, repeatPassword: e.target.value });

    if (e.target.value !== inputs.password) {
      setInputsError({ ...inputsError, repeatPassword: t("errors.passwordMatch") });
    } else {
      setInputsError({ ...inputsError, repeatPassword: "" });
    }
  };

  const components = {
    Header: () => <div>Header</div>,
    Footer: () => <div>Footer</div>,
  };

  return (
    <div onKeyDown={onButtonKeyDown}>
      <AuthLayout currentlySelected={currentlySelected}>
        <Typography variant={TypographyVariants.TITLE} style={{ paddingBottom: 20 }}>
          {t(`${currentlySelected}.title`)}
        </Typography>
        {!isWaitingForConfirmation ? (
          <>
            <TextField
              autoFocus
              inputPosition="top"
              placeholder={t("inputs.email.placeholder")}
              inputLabel={t("inputs.email.label")}
              type="email"
              value={inputs.email}
              onChange={onEmailChange}
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              error={inputsError.email !== ""}
              helperText={inputsError.email}
              required
            />
            <TextField
              inputPosition="top"
              placeholder={t("inputs.password.placeholder")}
              inputLabel={t("inputs.password.label")}
              type="password"
              value={inputs.password}
              onChange={onPasswordChange}
              autoComplete="current-password"
              autoCapitalize="none"
              autoCorrect="off"
              error={inputsError.password !== ""}
              helperText={inputsError.password}
              required
            />
            {currentlySelected === AuthPages.SIGN_UP && (
              <TextField
                inputPosition="top"
                placeholder={t("inputs.repeatPassword.placeholder")}
                inputLabel={t("inputs.repeatPassword.label")}
                type="password"
                value={inputs.repeatPassword}
                onChange={onRepeatPasswordChange}
                autoComplete="current-password"
                autoCapitalize="none"
                autoCorrect="off"
                error={inputsError.repeatPassword !== ""}
                helperText={inputsError.repeatPassword}
                required
              />
            )}
          </>
        ) : (
          <TextField
            inputPosition="top"
            placeholder={t("inputs.confirmationCode.placeholder")}
            inputLabel={t("inputs.confirmationCode.label")}
            type="text"
            value={inputs.confirmationCode}
            onChange={onConfirmCodeChange}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            required
          />
        )}

        <Button onClick={onSubmit} variant={ButtonVariants.PRIMARY} disabled={isButtonDisabled}>
          {isWaitingForConfirmation ? t("confirm.buttonText") : t(`${currentlySelected}.buttonText`)}
        </Button>
        {isAuthenticated && <div>{authSuccessText}</div>}
        {loginErrorText && <div>{loginErrorText}</div>}
      </AuthLayout>
    </div>
  );
};
