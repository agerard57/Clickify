import React from "react";

import { LandingPage } from "@/pages/landingPage/LandingPage";

import { LoginPage } from "@/pages/login/login";
import { ProductsPage } from "@/pages/products/productsPage";
import { CartPage } from "@/pages/cart/CartPage";
import { RecapPage } from "@/pages/recap/RecapPage";
import { SupportPage } from "@/pages/support/SupportPage";
import { SignUpPage } from "@/pages/signup/SignUpPage";
import { ProductDetailsPage } from "@/pages/product_details/ProductDetailsPage";
import { OrderHistoryPage } from "@/pages/order_history/OrderHistoryPage";
import { AccountAdressesPage } from "@/pages/account_adresses/AccountAdressesPage";
import { AccountPayementsPage } from "@/pages/account_payements/AccountPayementsPage";
import { AccountStorePage } from "@/pages/account_store/AccountStorePage";
import { AboutUsPage } from "@/pages/about_us/AboutUsPage";
import { AccountPage } from "@/pages/account/AccountPage";
import { NavbarMode, Pages, Routes } from "./typings";

export const routes: Routes = {
  [Pages.ERROR_PAGE]: {
    name: Pages.ERROR_PAGE,
    path: "/error",
    navbarMode: NavbarMode.NONE,
    /* TODO */
    element: <LandingPage />,
  },
  [Pages.LANDING_PAGE]: {
    name: Pages.LANDING_PAGE,
    path: "/",
    navbarMode: NavbarMode.BIG_PICTURE,
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
  [Pages.LOGIN_PAGE]: {
    name: Pages.LOGIN_PAGE,
    path: "/login",
    navbarMode: NavbarMode.NORMAL,
    element: <LoginPage />,
  },
  [Pages.SIGNUP_PAGE]: {
    name: Pages.SIGNUP_PAGE,
    path: "/signup",
    navbarMode: NavbarMode.NORMAL,
    element: <SignUpPage />,
  },
  [Pages.PRODUCTS_PAGE]: {
    name: Pages.PRODUCTS_PAGE,
    path: "/products",
    navbarMode: NavbarMode.PRODUCTS,
    element: <ProductsPage />,
  },
  [Pages.PRODUCT_DETAILS_PAGE]: {
    name: Pages.PRODUCT_DETAILS_PAGE,
    path: "/products/:id",
    navbarMode: NavbarMode.PRODUCTS,
    element: <ProductDetailsPage />,
  },
  [Pages.CART_PAGE]: {
    name: Pages.CART_PAGE,
    path: "/cart",
    navbarMode: NavbarMode.NORMAL,
    element: <CartPage />,
  },
  [Pages.RECAP_PAGE]: {
    name: Pages.RECAP_PAGE,
    path: "/recap",
    navbarMode: NavbarMode.NORMAL,
    element: <RecapPage />,
  },
  [Pages.ORDER_HISTORY_PAGE]: {
    name: Pages.ORDER_HISTORY_PAGE,
    path: "/order-history",
    navbarMode: NavbarMode.NORMAL,
    element: <OrderHistoryPage />,
  },
  [Pages.ACCOUNT_PAGE]: {
    name: Pages.ACCOUNT_PAGE,
    path: "/account",
    navbarMode: NavbarMode.NORMAL,
    element: <AccountPage />,
  },
  [Pages.ACCOUNT_ADDRESSES_PAGE]: {
    name: Pages.ACCOUNT_ADDRESSES_PAGE,
    path: "/account/addresses",
    navbarMode: NavbarMode.NORMAL,
    element: <AccountAdressesPage />,
  },
  [Pages.ACCOUNT_PAYEMENTS_PAGE]: {
    name: Pages.ACCOUNT_PAYEMENTS_PAGE,
    path: "/account/payements",
    navbarMode: NavbarMode.NORMAL,
    element: <AccountPayementsPage />,
  },
  [Pages.ACCOUNT_STORE_PAGE]: {
    name: Pages.ACCOUNT_STORE_PAGE,
    path: "/account/store",
    navbarMode: NavbarMode.NORMAL,
    element: <AccountStorePage />,
  },
  [Pages.ABOUT_US_PAGE]: {
    name: Pages.ABOUT_US_PAGE,
    path: "/about-us",
    navbarMode: NavbarMode.NORMAL,
    element: <AboutUsPage />,
  },
  [Pages.SUPPORT_PAGE]: {
    name: Pages.SUPPORT_PAGE,
    path: "/support",
    navbarMode: NavbarMode.NORMAL,
    element: <SupportPage />,
  },
};
