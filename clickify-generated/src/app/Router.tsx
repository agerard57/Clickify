import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useConstants } from "@/constants";
import { Layout } from "@/components";
import { Pages } from "@/router";

import { LoadingScreen } from "@/pages/loadingScreen/LoadingScreen";
import { routes } from "@/router/Routes";

export const Router: FC = () => {
  const { authStatus } = useConstants();

  if (!authStatus) return <LoadingScreen />; // Ensure authStatus and websiteSettings are defined

  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routes).map((route) =>
          route.authentificationMode && authStatus !== route.authentificationMode ? (
            <Route
              key={routes[Pages.ERROR_PAGE].name}
              path={routes[Pages.ERROR_PAGE].path}
              element={
                <Layout navbarMode={routes[Pages.ERROR_PAGE].navbarMode}>{routes[Pages.ERROR_PAGE].element}</Layout>
              }
            />
          ) : (
            <Route
              key={route.name}
              path={route.path}
              element={<Layout navbarMode={route.navbarMode}>{route.element}</Layout>}
            />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
};
