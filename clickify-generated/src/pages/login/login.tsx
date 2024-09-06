import React, { FC } from "react";

import { Box, Button, Container, Link, Typography } from "@mui/material";
import { IkeaLogo } from "@/assets";
import { Input } from "@/components";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

export const LoginPage: FC = () => {
  const { websiteSettings } = useWebsiteSettings();

  return (
    <Box
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: websiteSettings.colors.primary,
          width: "400px",
          borderRadius: "16px",
          padding: "2rem",
        }}
      >
        <img src={IkeaLogo} style={{ width: "75%", minWidth: "150px", objectFit: "contain" }} />
        <Typography style={{ fontSize: "16px", color: "#FAFAFA", textAlign: "center", marginTop: "2rem" }}>
          Enter your details to sign in to your account
        </Typography>
        <form style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Input
            label="Email"
            placeholder="Enter your email"
            style={{ color: "#FAFAFA" }}
            labelStyle={{ color: "#FAFAFA" }}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            style={{ marginTop: "14px", marginBottom: "1rem" }}
            labelStyle={{ color: "#FAFAFA" }}
          />
          <Button
            variant={ButtonVariants.THEME_COLOR}
            type="submit"
            style={{ width: "calc(100% - 2rem * 2)", margin: "0 2rem" }}
          >
            Login
          </Button>
        </form>
        <Link variant={TypographyVariants.WHITE} href="#">
          Having trouble in signing in?
        </Link>
        <Link variant={TypographyVariants.WHITE} href="/signup/">
          Register now!
        </Link>
      </Container>
    </Box>
  );
};
