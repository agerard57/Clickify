import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoadingScreen } from "@/loadingScreen";
import { AuthStatuses, Pages } from "@/router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAuthenticator } from "@aws-amplify/ui-react";

import { routes } from "../router/Routes";
import { Layout } from "./Layout";

export const Router: FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  if (authStatus === AuthStatuses.CONFIGURING) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.values(routes).map((route) =>
            !route.authentificationMode || (route.authentificationMode && authStatus === route.authentificationMode) ? (
              <Route key={route.name} path={route.path} element={route.element}>
                {route.subRoutes &&
                  Object.values(route.subRoutes).map((subRoute) => (
                    <Route key={subRoute.name} path={subRoute.path} element={subRoute.element} />
                  ))}
              </Route>
            ) : (
              <Route
                key={routes[Pages.ERROR_PAGE].name}
                path={routes[Pages.ERROR_PAGE].path}
                element={routes[Pages.ERROR_PAGE].element}
              />
            ),
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
