import React from "react";

import { AuthPage } from "@/authPage";
import { LandingPage } from "@/landingPage/components/LandingPage";
import { SetupPage } from "@/setupPage";

import {
  AccountLayout,
  AccountSubPages,
  BillingAndPayments,
  CompanyInformation,
  CurrentPlan,
  SubscriptionHistory,
} from "../accountPage";
import { AuthStatuses, Pages, Routes } from "./typings";

export const routes: Routes = {
  [Pages.ERROR_PAGE]: {
    name: Pages.ERROR_PAGE,
    path: "/error",
    /* TODO */
    element: <LandingPage />,
  },
  [Pages.LANDING_PAGE]: {
    name: Pages.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
  [Pages.AUTH]: {
    name: Pages.AUTH,
    path: "/auth",
    element: <AuthPage />,
    authentificationMode: AuthStatuses.UNAUTHENTICATED,
  },
  [Pages.ACCOUNT_PAGE]: {
    name: Pages.ACCOUNT_PAGE,
    path: "/account",
    element: <AccountLayout />,
    authentificationMode: AuthStatuses.AUTHENTICATED,
    subRoutes: {
      [AccountSubPages.COMPANY]: {
        name: AccountSubPages.COMPANY,
        path: "/account/company",
        element: <CompanyInformation />,
      },
      [AccountSubPages.PLAN]: {
        name: AccountSubPages.PLAN,
        path: "/account/plan",
        element: <CurrentPlan />,
      },
      [AccountSubPages.BILLING]: {
        name: AccountSubPages.BILLING,
        path: "/account/billing",
        element: <BillingAndPayments />,
      },
      [AccountSubPages.HISTORY]: {
        name: AccountSubPages.HISTORY,
        path: "/account/history",
        element: <SubscriptionHistory />,
      },
    },
  },
  [Pages.SETUP]: {
    name: Pages.SETUP,
    path: "/setup",
    element: <SetupPage />,
  },
};
