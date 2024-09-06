import React from "react";

import { LandingPage } from "@/landingPage/components/LandingPage";

import { DashboardPage } from "@/dashboardPage/DashboardPage";
import { UniverseDashboardPage } from "@/dashboardPage/UniverseDashboardPage";
import { UniverseReportPage } from "@/dashboardPage/UniverseReportPage";
import { TablePage } from "@/tablesPage/TablePage";
import { DocumentationManager } from "@/documentPage/DocumentationManager";
import { DemoRequestTablePage } from "@/tablesPage/DemoRequestTablePage";
import { AccountTablePage } from "@/tablesPage/AccountTablePage";
import { ClickifySupportTable } from "@/tablesPage/ClickifySupportTable";
import { UniverseOrderTablePage } from "@/tablesPage/UniverseOrderTablePage";
import { UniverseUsersTablePage } from "@/tablesPage/UniverseUsersTablePage";
import { UniversalEmployeesTablePage } from "@/tablesPage/UniversalEmployeesTablePage";
import { UniverseStoreTablePage } from "@/tablesPage/UniverseStoresTablePage";
import { UniverseSupportTablePage } from "@/tablesPage/UniverseSupportTablePage";
import { Pages, Routes } from "./typings";

export const routes: Routes = {
  [Pages.ERROR_PAGE]: {
    name: Pages.ERROR_PAGE,
    path: "/error",
    element: <LandingPage />,
  },
  [Pages.LANDING_PAGE]: {
    name: Pages.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
  [Pages.DASHBOARD_PAGE]: {
    name: Pages.DASHBOARD_PAGE,
    path: "/dashboard",
    element: <DashboardPage />,
  },
  [Pages.UNIVERSE_DASHBOARD_PAGE]: {
    name: Pages.UNIVERSE_DASHBOARD_PAGE,
    path: "/universe-dashboard",
    element: <UniverseDashboardPage />,
  },
  [Pages.UNIVERSE_REPORTING_PAGE]: {
    name: Pages.UNIVERSE_REPORTING_PAGE,
    path: "/universe-reports",
    element: <UniverseReportPage />,
  },
  [Pages.TABLE_PAGE]: {
    name: Pages.TABLE_PAGE,
    path: "/table",
    element: <TablePage />,
  },
  [Pages.DOCUMENTATION_MANAGER]: {
    name: Pages.DOCUMENTATION_MANAGER,
    path: "/documentation-manager",
    element: <DocumentationManager />,
  },
  [Pages.DEMO_REQUESTS_TABLE]: {
    name: Pages.DEMO_REQUESTS_TABLE,
    path: "/demo-requests",
    element: <DemoRequestTablePage />,
  },
  [Pages.ACCOUNT_TABLE]: {
    name: Pages.ACCOUNT_TABLE,
    path: "/account",
    element: <AccountTablePage />,
  },
  [Pages.CLICKIFY_SUPPORT]: {
    name: Pages.CLICKIFY_SUPPORT,
    path: "/clickify-reports",
    element: <ClickifySupportTable />,
  },
  [Pages.UNIVERSE_ORDERS_TABLE]: {
    name: Pages.UNIVERSE_ORDERS_TABLE,
    path: "/universe-orders",
    element: <UniverseOrderTablePage />,
  },
  [Pages.UNIVERSE_USERS_TABLE]: {
    name: Pages.UNIVERSE_USERS_TABLE,
    path: "/universe-users",
    element: <UniverseUsersTablePage />,
  },
  [Pages.UNIVERSE_EMPLOYEES_TABLE]: {
    name: Pages.UNIVERSE_EMPLOYEES_TABLE,
    path: "/universe-employees",
    element: <UniversalEmployeesTablePage />,
  },
  [Pages.UNIVERSE_STORES_TABLE]: {
    name: Pages.UNIVERSE_STORES_TABLE,
    path: "/universe-stores",
    element: <UniverseStoreTablePage />,
  },
  [Pages.UNIVERSE_SUPPORT_TABLE]: {
    name: Pages.UNIVERSE_SUPPORT_TABLE,
    path: "/universe-support",
    element: <UniverseSupportTablePage />,
  },
};
