import React, { ReactElement, FC, useEffect } from "react";
import { Box } from "@mui/material";
import { AuthStatuses, NavbarMode } from "@/router";
import { useConstants } from "@/constants";
import { Navbar } from "./navbar";

export const Layout: FC<{ children: ReactElement; navbarMode: NavbarMode }> = ({ children, navbarMode }) => {
  const { authStatus } = useConstants();

  return (
    <>
      {authStatus === AuthStatuses.AUTHENTICATED && <Navbar navbarMode={navbarMode} />}
      <Box
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          marginTop: navbarMode === NavbarMode.NORMAL || navbarMode === NavbarMode.PRODUCTS ? "64px" : 0,
        }}
      >
        {children}
      </Box>
    </>
  );
};
