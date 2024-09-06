import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";
import { useLanguage } from "@/language";
import { TickTitle, TickTitleVariant, ProductCardsList } from "@/components";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");
  const { language, change } = useLanguage();
  const { websiteSettings } = useWebsiteSettings();
  const websiteLanguage = websiteSettings.lang;

  useEffect(() => {
    if (websiteLanguage !== language) {
      change(websiteLanguage);
    }
  });

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: "calc(100% - 4rem)",
        padding: "2rem",
        backgroundColor: "#EFEFEF",
      }}
    >
      <TickTitle variant={TickTitleVariant.ThemeColor}>Latest products</TickTitle>
      <ProductCardsList />
    </Box>
  );
};
