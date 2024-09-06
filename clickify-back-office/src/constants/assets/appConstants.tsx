import { PlanTypes } from "@clickify/clickify-common";
import { SideBarProps, SideBarSections, ClickifyItems, UniversesItems } from "@/core/typings";
import {
  faBox,
  faCartShopping,
  faFile,
  faFilePen,
  faGrip,
  faHeadset,
  faSliders,
  faSquarePollVertical,
  faStore,
  faTicket,
  faUser,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { colorPalette } from "@/theme/colorPalette";
import { Pages } from "@/router";
import { routes } from "@/router/Routes";

export const appConstants = {
  authStatus: "authenticated",
  core: {
    sideBar: {
      plans: [PlanTypes.BASIC, PlanTypes.CLICKIFY, PlanTypes.PREMIUM],
      categories: {
        [SideBarSections.CLICKIFY]: {
          title: SideBarSections.CLICKIFY,
          adminOnly: true,
          items: {
            [ClickifyItems.DASHBOARD]: {
              title: ClickifyItems.DASHBOARD,
              link: routes[Pages.DASHBOARD_PAGE].path,
              icon: faGrip,
              color: colorPalette.backOfficeColors[1],
            },
            [ClickifyItems.ACCOUNT_LIST]: {
              title: ClickifyItems.ACCOUNT_LIST,
              link: routes[Pages.ACCOUNT_TABLE].path,
              icon: faUser,
              color: colorPalette.backOfficeColors[2],
            },
            [ClickifyItems.DEMO_REQUESTS]: {
              title: ClickifyItems.DEMO_REQUESTS,
              link: routes[Pages.DEMO_REQUESTS_TABLE].path,
              icon: faHeadset,
              color: colorPalette.backOfficeColors[3],
            },
            [ClickifyItems.DOCUMENTATION_MANAGER]: {
              title: ClickifyItems.DOCUMENTATION_MANAGER,
              link: routes[Pages.DOCUMENTATION_MANAGER].path,
              icon: faFilePen,
              color: colorPalette.grey,
            },
            [ClickifyItems.SUPPORT]: {
              title: ClickifyItems.SUPPORT,
              link: routes[Pages.CLICKIFY_SUPPORT].path,
              icon: faTicket,
              color: colorPalette.backOfficeColors[4],
            },
          },
        },
        [SideBarSections.UNIVERSES]: {
          title: SideBarSections.UNIVERSES,
          hasBadge: true,
          items: {
            [UniversesItems.DASHBOARD]: {
              title: UniversesItems.DASHBOARD,
              link: routes[Pages.UNIVERSE_DASHBOARD_PAGE].path,
              icon: faGrip,
              color: colorPalette.backOfficeColors[5],
            },
            [UniversesItems.REPORTING]: {
              title: UniversesItems.REPORTING,
              link: routes[Pages.UNIVERSE_REPORTING_PAGE].path,
              icon: faSquarePollVertical,
              color: colorPalette.backOfficeColors[6],
              exclusiveTo: PlanTypes.CLICKIFY,
            },
            [UniversesItems.ORDERS]: {
              title: UniversesItems.ORDERS,
              link: routes[Pages.UNIVERSE_ORDERS_TABLE].path,
              icon: faCartShopping,
              color: colorPalette.primaryBlack,
            },
            [UniversesItems.PRODUCTS]: {
              title: UniversesItems.PRODUCTS,
              link: "/", // TODO Find this
              icon: faBox,
              color: colorPalette.backOfficeColors[10],
            },
            [UniversesItems.USER_LIST]: {
              title: UniversesItems.USER_LIST,
              link: routes[Pages.UNIVERSE_USERS_TABLE].path,
              icon: faUsers,
              color: colorPalette.backOfficeColors[9],
            },
            [UniversesItems.EMPLOYEES]: {
              title: UniversesItems.EMPLOYEES,
              link: routes[Pages.UNIVERSE_EMPLOYEES_TABLE].path,
              icon: faUserTie,
              color: colorPalette.backOfficeColors[8],
            },
            [UniversesItems.STORES]: {
              title: UniversesItems.STORES,
              link: routes[Pages.UNIVERSE_STORES_TABLE].path,
              icon: faStore,
              color: colorPalette.backOfficeColors[12],
            },
            [UniversesItems.WEBSITE_MANAGER]: {
              title: UniversesItems.WEBSITE_MANAGER,
              link: "/", // TODO Find this
              icon: faSliders,
              color: colorPalette.backOfficeColors[7],
            },
            [UniversesItems.SUPPORT]: {
              title: UniversesItems.SUPPORT,
              link: routes[Pages.UNIVERSE_SUPPORT_TABLE].path,
              icon: faTicket,
              color: colorPalette.backOfficeColors[11],
              exclusiveTo: PlanTypes.PREMIUM,
            },
          },
        },
        [SideBarSections.DOCUMENTATION]: {
          title: SideBarSections.DOCUMENTATION,
          items: {
            default: {
              title: "Default",
              icon: faFile,
              link: "/", // TODO Find this
              color: colorPalette.grey,
            },
          },
        },
      },
    } as SideBarProps,
  },
} as const;
