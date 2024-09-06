import { useContext } from "react";
import { WebsiteSettingsContext } from "../contexts";

export const useWebsiteSettings = () => {
  return useContext(WebsiteSettingsContext);
};
