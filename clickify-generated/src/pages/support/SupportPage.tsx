import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Divider, Typography } from "@mui/material";
import { useLanguage } from "@/language";
import { IkeaBanner } from "@/assets";
import { ButtonVariants } from "@/theme";
import { InfoBox } from "@/components/infoBox/InfoBox";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

const InfoBoxStyles = {
  width: "100%",
  margin: "1rem 0",
  backgroundColor: "#f0f0f0",
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const SupportPage: FC = () => {
  const { t } = useTranslation("Support");
  const { websiteSettings } = useWebsiteSettings();

  return (
    <Box
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flex: 1,
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1000px",
          maxHeight: "800px",
        }}
      >
        <Box style={{ width: "65%" }}>
          <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>{t("Support")}</Typography>
          <img
            src={websiteSettings.support.photoPath}
            alt="Banner"
            style={{
              borderRadius: "15px",
              margin: "25px 0",
              lineHeight: "1.5",
              width: "100%",
              height: "auto",
            }}
          />
          <Typography style={{ fontSize: "16px", color: "#8a8a8a" }}>{websiteSettings.landingPage.text}</Typography>
        </Box>
        <Divider orientation="vertical" flexItem style={{ margin: "2.5rem" }} />
        <Box style={{ width: "35%" }}>
          <Typography style={{ fontSize: "18px", padding: "1rem", color: "#8a8a8a" }}>{t("Here to help !")}</Typography>
          <InfoBox title={t("Support Status")} lines={[capitalize(websiteSettings.status)]} style={InfoBoxStyles} />
          {websiteSettings.support.email.confirmed && (
            <InfoBox
              title={t("Support email address")}
              lines={[websiteSettings.support.email.emailAddress]}
              style={InfoBoxStyles}
            />
          )}
          {websiteSettings.support.phoneNumber.display && (
            <InfoBox
              title={t("Support phone number")}
              lines={[websiteSettings.support.phoneNumber.number]}
              style={InfoBoxStyles}
            />
          )}
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            style={{ marginTop: "16px", width: "100%", borderRadius: "5px" }}
          >
            {t("Write to support")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
