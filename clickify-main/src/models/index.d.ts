import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum PlanTypes {
  PENDING = "pending",
  BASIC = "basic",
  CLICKIFY = "clickify",
  PREMIUM = "premium",
  ADMIN = "admin",
  NONE = "none",
  BANNED = "banned",
}

export enum MainSupportStatuses {
  CANCELLED = "cancelled",
  IN_PROGRESS = "inProgress",
  RESOLVED = "resolved",
  UNRESOLVED = "unresolved",
  WAITING = "waiting",
}

export enum DemosStatuses {
  WAITING = "waiting",
  IN_PROGRESS = "inProgress",
  DONE = "done",
  CANCELLED = "cancelled",
}

export enum MainSupportTopics {
  ORDER = "order",
  RETURNS_REFUNDS = "returnsRefunds",
  TECHNICAL_ISSUES = "technicalIssues",
  PAYMENTS = "payments",
  CUSTOMER_SERVICE = "customerService",
  SECURITY = "security",
  FEEDBACK = "feedback",
  OTHER = "other",
}

export enum WebsiteStatuses {
  ACTIVE = "active",
  MAINTENANCE = "maintenance",
  INACTIVE = "inactive",
}

type EagerTraffic = {
  readonly day: string;
  readonly number: string;
};

type LazyTraffic = {
  readonly day: string;
  readonly number: string;
};

export declare type Traffic = LazyLoading extends LazyLoadingDisabled ? EagerTraffic : LazyTraffic;

export declare const Traffic: new (init: ModelInit<Traffic>) => Traffic;

type EagerBillingAddress = {
  readonly number: string;
  readonly streetName: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly country: string;
};

type LazyBillingAddress = {
  readonly number: string;
  readonly streetName: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly country: string;
};

export declare type BillingAddress = LazyLoading extends LazyLoadingDisabled ? EagerBillingAddress : LazyBillingAddress;

export declare const BillingAddress: new (init: ModelInit<BillingAddress>) => BillingAddress;

type EagerPlanHistory = {
  readonly current: boolean;
  readonly plan: PlanTypes | keyof typeof PlanTypes;
  readonly since: string;
  readonly exp?: string | null;
  readonly price?: number | null;
};

type LazyPlanHistory = {
  readonly current: boolean;
  readonly plan: PlanTypes | keyof typeof PlanTypes;
  readonly since: string;
  readonly exp?: string | null;
  readonly price?: number | null;
};

export declare type PlanHistory = LazyLoading extends LazyLoadingDisabled ? EagerPlanHistory : LazyPlanHistory;

export declare const PlanHistory: new (init: ModelInit<PlanHistory>) => PlanHistory;

type EagerAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly traffic: Traffic[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly traffic: Traffic[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Analytics = LazyLoading extends LazyLoadingDisabled ? EagerAnalytics : LazyAnalytics;

export declare const Analytics: (new (init: ModelInit<Analytics>) => Analytics) & {
  copyOf(source: Analytics, mutator: (draft: MutableModel<Analytics>) => MutableModel<Analytics> | void): Analytics;
};

type EagerCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly legalName: string;
  readonly tradingName: string;
  readonly email: string;
  readonly password: string;
  readonly lastPasswordGen: string;
  readonly billingAddress?: BillingAddress | null;
  readonly planHistory?: PlanHistory[] | null;
  readonly stripeId?: string | null;
  readonly registeredOn: string;
  readonly updatedOn: string;
  readonly refreshTokens?: string[] | null;
  readonly recoveryCode?: string | null;
  readonly status: MainSupportStatuses | keyof typeof MainSupportStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly legalName: string;
  readonly tradingName: string;
  readonly email: string;
  readonly password: string;
  readonly lastPasswordGen: string;
  readonly billingAddress?: BillingAddress | null;
  readonly planHistory?: PlanHistory[] | null;
  readonly stripeId?: string | null;
  readonly registeredOn: string;
  readonly updatedOn: string;
  readonly refreshTokens?: string[] | null;
  readonly recoveryCode?: string | null;
  readonly status: MainSupportStatuses | keyof typeof MainSupportStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Companies = LazyLoading extends LazyLoadingDisabled ? EagerCompanies : LazyCompanies;

export declare const Companies: (new (init: ModelInit<Companies>) => Companies) & {
  copyOf(source: Companies, mutator: (draft: MutableModel<Companies>) => MutableModel<Companies> | void): Companies;
};

type EagerDemos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Demos, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly companyName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly details: string;
  readonly openedOn: string;
  readonly updatedOn: string;
  readonly status: DemosStatuses | keyof typeof DemosStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyDemos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Demos, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly companyName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly details: string;
  readonly openedOn: string;
  readonly updatedOn: string;
  readonly status: DemosStatuses | keyof typeof DemosStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Demos = LazyLoading extends LazyLoadingDisabled ? EagerDemos : LazyDemos;

export declare const Demos: (new (init: ModelInit<Demos>) => Demos) & {
  copyOf(source: Demos, mutator: (draft: MutableModel<Demos>) => MutableModel<Demos> | void): Demos;
};

type EagerDocumentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Documentation, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly public: boolean;
  readonly title: string;
  readonly content: string;
  readonly updatedOn: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyDocumentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Documentation, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly public: boolean;
  readonly title: string;
  readonly content: string;
  readonly updatedOn: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Documentation = LazyLoading extends LazyLoadingDisabled ? EagerDocumentation : LazyDocumentation;

export declare const Documentation: (new (init: ModelInit<Documentation>) => Documentation) & {
  copyOf(
    source: Documentation,
    mutator: (draft: MutableModel<Documentation>) => MutableModel<Documentation> | void,
  ): Documentation;
};

type EagerSupport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Support, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly companyName: string;
  readonly email: string;
  readonly topic: MainSupportTopics | keyof typeof MainSupportTopics;
  readonly updatedOn: string;
  readonly openedOn: string;
  readonly subject: string;
  readonly details: string;
  readonly status: WebsiteStatuses | keyof typeof WebsiteStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySupport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Support, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly companyName: string;
  readonly email: string;
  readonly topic: MainSupportTopics | keyof typeof MainSupportTopics;
  readonly updatedOn: string;
  readonly openedOn: string;
  readonly subject: string;
  readonly details: string;
  readonly status: WebsiteStatuses | keyof typeof WebsiteStatuses;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Support = LazyLoading extends LazyLoadingDisabled ? EagerSupport : LazySupport;

export declare const Support: (new (init: ModelInit<Support>) => Support) & {
  copyOf(source: Support, mutator: (draft: MutableModel<Support>) => MutableModel<Support> | void): Support;
};
