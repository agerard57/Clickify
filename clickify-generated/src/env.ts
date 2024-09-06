import { WebsiteSettings } from "@clickify/clickify-common";

declare global {
  interface Window {
    env: any;
  }
}

type EnvType = {
  websiteSettings: WebsiteSettings;
};

export const env: EnvType = { ...window.env };
