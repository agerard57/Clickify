// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const PlanTypes = {
  PENDING: "pending",
  BASIC: "basic",
  CLICKIFY: "clickify",
  PREMIUM: "premium",
  ADMIN: "admin",
  NONE: "none",
  BANNED: "banned",
};

const MainSupportStatuses = {
  CANCELLED: "cancelled",
  IN_PROGRESS: "inProgress",
  RESOLVED: "resolved",
  UNRESOLVED: "unresolved",
  WAITING: "waiting",
};

const DemosStatuses = {
  WAITING: "waiting",
  IN_PROGRESS: "inProgress",
  DONE: "done",
  CANCELLED: "cancelled",
};

const MainSupportTopics = {
  ORDER: "order",
  RETURNS_REFUNDS: "returnsRefunds",
  TECHNICAL_ISSUES: "technicalIssues",
  PAYMENTS: "payments",
  CUSTOMER_SERVICE: "customerService",
  SECURITY: "security",
  FEEDBACK: "feedback",
  OTHER: "other",
};

const WebsiteStatuses = {
  ACTIVE: "active",
  MAINTENANCE: "maintenance",
  INACTIVE: "inactive",
};

const { Analytics, Companies, Demos, Documentation, Support, Traffic, BillingAddress, PlanHistory } =
  initSchema(schema);

export {
  Analytics,
  Companies,
  Demos,
  Documentation,
  Support,
  PlanTypes,
  MainSupportStatuses,
  DemosStatuses,
  MainSupportTopics,
  WebsiteStatuses,
  Traffic,
  BillingAddress,
  PlanHistory,
};
