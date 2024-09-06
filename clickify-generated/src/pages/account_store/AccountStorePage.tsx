import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { AccountNavbar } from "@/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { MapSection } from "@/components/core/MapSection";
import { ButtonVariants } from "@/theme";

const position = [6.176372569195507, 49.10684302392727] as [number, number];

export const AccountStorePage: FC = () => {
  const { t } = useTranslation("Accountstore");
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <AccountNavbar />
      <Box style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <Box style={{ width: "500px", padding: "2rem" }}>
          <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <FontAwesomeIcon icon={faStore} style={{ marginRight: "0.5rem", color: theme.palette.primary.main }} />
            {t("Favorite Store")}
          </Typography>
          <Divider />
          <MapSection
            tripCoordinates={{
              position,
            }}
            style={{ margin: "8px", minHeight: "300px", minWidth: "0", width: "100%" }}
          />
        </Box>
        <Box style={{ maxWidth: "350px", padding: "2rem", marginTop: "2rem" }}>
          <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "black" }}>{t("Ikea Metz")}</Typography>
          <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
            {t("Rue du trou aux Serpents")}
          </Typography>
          <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
            {t("57140 La maxe, Metz")}
          </Typography>
          <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
            {t("09 69 36 20 06")}
          </Typography>
        </Box>
        <Box
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button variant={ButtonVariants.PRIMARY} style={{ width: "max-content" }}>
            {t("Change my favorite store")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
