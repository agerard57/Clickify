import React, { FC } from "react";
import { Box, Link, Typography } from "@mui/material";
import { t } from "i18next";

export const AccountNavbar: FC = () => {
  return (
    <>
      <Box style={{ width: "350px" }}>
        <Box style={{ position: "fixed", backgroundColor: "#EFEFEF", minHeight: "100%", width: "350px" }}>
          <Typography style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "600" }}>
            <Link href="/account" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Account")}
            </Link>
          </Typography>
          <hr style={{ borderTop: "1px solid #bebebe", borderBottom: "none", margin: "0.5rem 0" }} />
          <Typography style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "600" }}>
            <Link href="/account" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Account details")}
            </Link>
          </Typography>
          <Typography
            style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "500", color: "#7A7A7A" }}
          >
            <Link href="/account/addresses" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Addresses")}
            </Link>
          </Typography>
          <Typography
            style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "500", color: "#7A7A7A" }}
          >
            <Link href="/account/payements" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Payment")}
            </Link>
          </Typography>
          <Typography
            style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "500", color: "#7A7A7A" }}
          >
            <Link href="/account/store" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Favorite store")}
            </Link>
          </Typography>
          <Typography
            style={{ fontSize: "16px", padding: "0.5rem 0 0.5rem 1rem", fontWeight: "500", color: "#FF6565" }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {t("Close account")}
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
