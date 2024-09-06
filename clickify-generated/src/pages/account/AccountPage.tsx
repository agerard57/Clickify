import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Typography } from "@mui/material";
import { AccountNavbar } from "@/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { avatarIcon } from "@/assets";
import { ButtonVariants } from "@/theme";

export const AccountPage: FC = () => {
  const { t } = useTranslation("Account");

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <AccountNavbar />
      <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "2rem" }}>
          {t("Account details")}
        </Typography>
        <Box style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <Box style={{ flex: 1, padding: "2rem" }}>
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Name :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("M.Gerard Alexandre")}</Typography>
            <Box style={{ height: "1rem" }} />
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Date of birth :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("01/01/1990")}</Typography>
          </Box>
          <Box style={{ flex: 1, padding: "2rem" }}>
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Account type :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("Admin")}</Typography>
            <Box style={{ height: "1rem" }} />
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Registered on :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("2022 12 03")}</Typography>
          </Box>
          <Box style={{ flex: 1, padding: "2rem" }}>
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Email :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
              {t(" agerard57@protonmail.com")}
            </Typography>
            <Box style={{ height: "1rem" }} />
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Password :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("****************")}</Typography>
            <Box style={{ height: "1rem" }} />
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Last password change :")}</Typography>
            <Typography style={{ fontSize: "1rem", color: "#7a7a7a" }}>{t("2022 12 03")}</Typography>
          </Box>
          <Box style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: "1rem", color: "black" }}>{t("Profile picture :")}</Typography>
            <Box style={{ display: "flex", justifyContent: "left" }}>
              <img src={avatarIcon} alt="avatar" style={{ width: "100px", height: "100px" }} />
            </Box>
            <Box style={{ flex: 1 }} />
            <Button variant={ButtonVariants.PRIMARY} style={{ width: "100%" }}>
              {t("Edit my informations")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
