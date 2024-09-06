import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { AccountNavbar } from "@/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { CustomSelect } from "@/components/filter/CustomSelect";
import { PayementForm } from "../cart/forms/PayementForm";

export const AccountPayementsPage: FC = () => {
  const { t } = useTranslation("Accountpayements");
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <AccountNavbar />
      <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box style={{ maxWidth: "350px", padding: "2rem" }}>
          <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "0.5rem", color: theme.palette.primary.main }} />
            {t("Payements")}
          </Typography>
          <Divider />
          <CustomSelect choices={["Home", "Office", "New Address"]} defaultChoice="Home" />
          <PayementForm onSubmit={(datas) => console.log(datas)} />
        </Box>
      </Box>
    </Box>
  );
};
