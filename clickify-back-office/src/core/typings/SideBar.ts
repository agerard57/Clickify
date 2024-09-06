import { PlanTypes } from "@clickify/clickify-common";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export enum SideBarSections {
  CLICKIFY = "clickify",
  UNIVERSES = "universes",
  DOCUMENTATION = "documentation",
}

export enum ClickifyItems {
  DASHBOARD = "dashboard",
  ACCOUNT_LIST = "accountList",
  DEMO_REQUESTS = "demoRequests",
  DOCUMENTATION_MANAGER = "documentationManager",
  SUPPORT = "support",
}

export enum UniversesItems {
  DASHBOARD = "dashboard",
  REPORTING = "reporting",
  ORDERS = "orders",
  PRODUCTS = "products",
  USER_LIST = "userList",
  EMPLOYEES = "employees",
  STORES = "stores",
  WEBSITE_MANAGER = "websiteManager",
  SUPPORT = "support",
}
export interface SideBarItemProps {
  title: string;
  link: string;
  icon: IconDefinition;
  color: string;
  exclusiveTo?: PlanTypes;
}

export interface SideBarCategoryProps {
  title: string;
  hasBadge?: boolean;
  adminOnly?: boolean;
  items: Record<string, SideBarItemProps>;
}

export interface SideBarProps {
  plans: [PlanTypes.BASIC, PlanTypes.CLICKIFY, PlanTypes.PREMIUM];
  categories: Record<string, SideBarCategoryProps>;
}

/* 
export interface SideBarProps {
  logo: React.ReactNode;
  currentPlan: PlanTypes;
  sideBarCategories: SideBarCategories[];
}
 */
