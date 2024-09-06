import React, { FC, ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

import { Fade, ThemeProvider } from "@mui/material";
import { ConstantsProvider, useConstants } from "@/constants";
import { WebsiteSettingsProvider, useWebsiteSettings } from "@/contexts/websiteSettings";
import { i18n } from "@/i18n";
import { theme } from "@/theme";
import { env } from "@/env";
import { LoadingScreen } from "../pages/loadingScreen/LoadingScreen";

interface Props {
  children: ReactNode;
}

export const CustomThemeProvider: FC<Props> = ({ children }) => {
  const { websiteSettings, setWebsiteSettings } = useWebsiteSettings();

  useEffect(() => {
    setWebsiteSettings(env.websiteSettings);
  }, [setWebsiteSettings]);

  return !websiteSettings ? (
    <LoadingScreen />
  ) : (
    <ThemeProvider theme={theme(websiteSettings.colors)}>{children}</ThemeProvider>
  );
};

export const Providers: FC<Props> = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <ConstantsProvider>
      <WebsiteSettingsProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </WebsiteSettingsProvider>
    </ConstantsProvider>
  </I18nextProvider>
);
