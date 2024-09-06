import React, { FC, ReactNode, useState } from "react";
import { WebsiteSettings } from "@clickify/clickify-common";
import { WebsiteSettingsContext } from "../contexts";

interface Props {
  children: ReactNode;
}

export interface WebsiteSettingsProviderType {
  websiteSettings: WebsiteSettings;
  setWebsiteSettings: React.Dispatch<React.SetStateAction<WebsiteSettings>>;
}

export const WebsiteSettingsProvider: FC<Props> = ({ children }) => {
  const [websiteSettings, setWebsiteSettings] = useState<WebsiteSettings | undefined>();

  return (
    <WebsiteSettingsContext.Provider value={{ websiteSettings, setWebsiteSettings }}>
      {children}
    </WebsiteSettingsContext.Provider>
  );
};
