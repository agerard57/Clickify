import { createContext } from "react";
import { WebsiteSettingsProviderType } from "../components/WebsiteSettingsProvider";

export const WebsiteSettingsContext = createContext<WebsiteSettingsProviderType | undefined>(undefined);
