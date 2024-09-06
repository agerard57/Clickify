import React, { FC } from "react";

import { Box, Typography, Link } from "@mui/material";
import { InfoBox } from "@/components/infoBox/InfoBox";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

export const AboutUsPage: FC = () => {
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
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "1000px",
          maxHeight: "800px",
        }}
      >
        <Typography style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>About Us</Typography>
        <img
          src={websiteSettings.aboutUs.photoPath}
          alt="Banner"
          style={{ width: "70%", height: "auto", margin: "25px auto", borderRadius: "15px" }}
        />
        <Typography style={{ fontSize: "16px", color: "#8a8a8a" }}>{websiteSettings.aboutUs.text}</Typography>
        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "3rem" }}>
          {websiteSettings.aboutUs.emailAddress.confirmed && (
            <InfoBox title="Contact email address:" lines={[websiteSettings.aboutUs.emailAddress.emailAddress]} />
          )}
          {websiteSettings.aboutUs.phoneNumber.display && (
            <InfoBox title="Contact phone number:" lines={[websiteSettings.aboutUs.phoneNumber.number]} />
          )}
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "0.5rem" }}>
          <a
            href={websiteSettings.aboutUs.termsAndConditions.filePath}
            target="_blank"
            style={{ color: "black" }}
            rel="noreferrer"
          >
            Terms and Conditions
          </a>
          {" - "}
          <a href="https://www.clickify.agerard.dev" target="_blank" style={{ color: "black" }} rel="noreferrer">
            Generated and Hosted by Clickify
          </a>
        </Box>
      </Box>
    </Box>
  );
};
