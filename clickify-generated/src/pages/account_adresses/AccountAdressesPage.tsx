import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { AccountNavbar } from "@/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { CustomSelect } from "@/components/filter/CustomSelect";
import { DeliveryForm } from "../cart/forms/DeliveryForm";

export const AccountAdressesPage: FC = () => {
  const { t } = useTranslation("Accountadresses");
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <AccountNavbar />
      <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box style={{ maxWidth: "350px", padding: "2rem" }}>
          <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{ marginRight: "0.5rem", color: theme.palette.primary.main }}
            />
            {t("Address")}
          </Typography>
          <Divider />
          <CustomSelect choices={["Home", "Office", "New Address"]} defaultChoice="Home" />
          <DeliveryForm onSubmit={(datas) => console.log(datas)} />
        </Box>
      </Box>
    </Box>
  );
};
