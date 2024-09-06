/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnalyticsInput = {
  id?: string | null;
  traffic: Array<TrafficInput>;
  _version?: number | null;
};

export type TrafficInput = {
  day: string;
  number: string;
};

export type ModelAnalyticsConditionInput = {
  and?: Array<ModelAnalyticsConditionInput | null> | null;
  or?: Array<ModelAnalyticsConditionInput | null> | null;
  not?: ModelAnalyticsConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type Analytics = {
  __typename: "Analytics";
  id: string;
  traffic: Array<Traffic>;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Traffic = {
  __typename: "Traffic";
  day: string;
  number: string;
};

export type UpdateAnalyticsInput = {
  id: string;
  traffic?: Array<TrafficInput> | null;
  _version?: number | null;
};

export type DeleteAnalyticsInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompaniesInput = {
  id?: string | null;
  legalName: string;
  tradingName: string;
  email: string;
  password: string;
  lastPasswordGen: string;
  billingAddress?: BillingAddressInput | null;
  planHistory?: Array<PlanHistoryInput> | null;
  stripeId?: string | null;
  registeredOn: string;
  updatedOn: string;
  refreshTokens?: Array<string> | null;
  recoveryCode?: string | null;
  status: MainSupportStatuses;
  _version?: number | null;
};

export type BillingAddressInput = {
  number: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type PlanHistoryInput = {
  current: boolean;
  plan: PlanTypes;
  since: string;
  exp?: string | null;
  price?: number | null;
};

export enum PlanTypes {
  pending = "pending",
  basic = "basic",
  clickify = "clickify",
  premium = "premium",
  admin = "admin",
  none = "none",
  banned = "banned",
}

export enum MainSupportStatuses {
  cancelled = "cancelled",
  inProgress = "inProgress",
  resolved = "resolved",
  unresolved = "unresolved",
  waiting = "waiting",
}

export type ModelCompaniesConditionInput = {
  legalName?: ModelStringInput | null;
  tradingName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  lastPasswordGen?: ModelStringInput | null;
  stripeId?: ModelStringInput | null;
  registeredOn?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  refreshTokens?: ModelStringInput | null;
  recoveryCode?: ModelStringInput | null;
  status?: ModelMainSupportStatusesInput | null;
  and?: Array<ModelCompaniesConditionInput | null> | null;
  or?: Array<ModelCompaniesConditionInput | null> | null;
  not?: ModelCompaniesConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelMainSupportStatusesInput = {
  eq?: MainSupportStatuses | null;
  ne?: MainSupportStatuses | null;
};

export type Companies = {
  __typename: "Companies";
  id: string;
  legalName: string;
  tradingName: string;
  email: string;
  password: string;
  lastPasswordGen: string;
  billingAddress?: BillingAddress | null;
  planHistory?: Array<PlanHistory> | null;
  stripeId?: string | null;
  registeredOn: string;
  updatedOn: string;
  refreshTokens?: Array<string> | null;
  recoveryCode?: string | null;
  status: MainSupportStatuses;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type BillingAddress = {
  __typename: "BillingAddress";
  number: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type PlanHistory = {
  __typename: "PlanHistory";
  current: boolean;
  plan: PlanTypes;
  since: string;
  exp?: string | null;
  price?: number | null;
};

export type UpdateCompaniesInput = {
  id: string;
  legalName?: string | null;
  tradingName?: string | null;
  email?: string | null;
  password?: string | null;
  lastPasswordGen?: string | null;
  billingAddress?: BillingAddressInput | null;
  planHistory?: Array<PlanHistoryInput> | null;
  stripeId?: string | null;
  registeredOn?: string | null;
  updatedOn?: string | null;
  refreshTokens?: Array<string> | null;
  recoveryCode?: string | null;
  status?: MainSupportStatuses | null;
  _version?: number | null;
};

export type DeleteCompaniesInput = {
  id: string;
  _version?: number | null;
};

export type CreateDemosInput = {
  id?: string | null;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  details: string;
  openedOn: string;
  updatedOn: string;
  status: DemosStatuses;
  _version?: number | null;
};

export enum DemosStatuses {
  waiting = "waiting",
  inProgress = "inProgress",
  done = "done",
  cancelled = "cancelled",
}

export type ModelDemosConditionInput = {
  name?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  details?: ModelStringInput | null;
  openedOn?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  status?: ModelDemosStatusesInput | null;
  and?: Array<ModelDemosConditionInput | null> | null;
  or?: Array<ModelDemosConditionInput | null> | null;
  not?: ModelDemosConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelDemosStatusesInput = {
  eq?: DemosStatuses | null;
  ne?: DemosStatuses | null;
};

export type Demos = {
  __typename: "Demos";
  id: string;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  details: string;
  openedOn: string;
  updatedOn: string;
  status: DemosStatuses;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDemosInput = {
  id: string;
  name?: string | null;
  companyName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  details?: string | null;
  openedOn?: string | null;
  updatedOn?: string | null;
  status?: DemosStatuses | null;
  _version?: number | null;
};

export type DeleteDemosInput = {
  id: string;
  _version?: number | null;
};

export type CreateDocumentationInput = {
  id?: string | null;
  public: boolean;
  title: string;
  content: string;
  updatedOn: string;
  _version?: number | null;
};

export type ModelDocumentationConditionInput = {
  public?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  and?: Array<ModelDocumentationConditionInput | null> | null;
  or?: Array<ModelDocumentationConditionInput | null> | null;
  not?: ModelDocumentationConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type Documentation = {
  __typename: "Documentation";
  id: string;
  public: boolean;
  title: string;
  content: string;
  updatedOn: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDocumentationInput = {
  id: string;
  public?: boolean | null;
  title?: string | null;
  content?: string | null;
  updatedOn?: string | null;
  _version?: number | null;
};

export type DeleteDocumentationInput = {
  id: string;
  _version?: number | null;
};

export type CreateSupportInput = {
  id?: string | null;
  companyName: string;
  email: string;
  topic: MainSupportTopics;
  updatedOn: string;
  openedOn: string;
  subject: string;
  details: string;
  status: WebsiteStatuses;
  _version?: number | null;
};

export enum MainSupportTopics {
  order = "order",
  returnsRefunds = "returnsRefunds",
  technicalIssues = "technicalIssues",
  payments = "payments",
  customerService = "customerService",
  security = "security",
  feedback = "feedback",
  other = "other",
}

export enum WebsiteStatuses {
  active = "active",
  maintenance = "maintenance",
  inactive = "inactive",
}

export type ModelSupportConditionInput = {
  companyName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  topic?: ModelMainSupportTopicsInput | null;
  updatedOn?: ModelStringInput | null;
  openedOn?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  details?: ModelStringInput | null;
  status?: ModelWebsiteStatusesInput | null;
  and?: Array<ModelSupportConditionInput | null> | null;
  or?: Array<ModelSupportConditionInput | null> | null;
  not?: ModelSupportConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelMainSupportTopicsInput = {
  eq?: MainSupportTopics | null;
  ne?: MainSupportTopics | null;
};

export type ModelWebsiteStatusesInput = {
  eq?: WebsiteStatuses | null;
  ne?: WebsiteStatuses | null;
};

export type Support = {
  __typename: "Support";
  id: string;
  companyName: string;
  email: string;
  topic: MainSupportTopics;
  updatedOn: string;
  openedOn: string;
  subject: string;
  details: string;
  status: WebsiteStatuses;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSupportInput = {
  id: string;
  companyName?: string | null;
  email?: string | null;
  topic?: MainSupportTopics | null;
  updatedOn?: string | null;
  openedOn?: string | null;
  subject?: string | null;
  details?: string | null;
  status?: WebsiteStatuses | null;
  _version?: number | null;
};

export type DeleteSupportInput = {
  id: string;
  _version?: number | null;
};

export type ModelAnalyticsFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelAnalyticsFilterInput | null> | null;
  or?: Array<ModelAnalyticsFilterInput | null> | null;
  not?: ModelAnalyticsFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAnalyticsConnection = {
  __typename: "ModelAnalyticsConnection";
  items: Array<Analytics | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCompaniesFilterInput = {
  id?: ModelIDInput | null;
  legalName?: ModelStringInput | null;
  tradingName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  password?: ModelStringInput | null;
  lastPasswordGen?: ModelStringInput | null;
  stripeId?: ModelStringInput | null;
  registeredOn?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  refreshTokens?: ModelStringInput | null;
  recoveryCode?: ModelStringInput | null;
  status?: ModelMainSupportStatusesInput | null;
  and?: Array<ModelCompaniesFilterInput | null> | null;
  or?: Array<ModelCompaniesFilterInput | null> | null;
  not?: ModelCompaniesFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCompaniesConnection = {
  __typename: "ModelCompaniesConnection";
  items: Array<Companies | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelDemosFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  details?: ModelStringInput | null;
  openedOn?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  status?: ModelDemosStatusesInput | null;
  and?: Array<ModelDemosFilterInput | null> | null;
  or?: Array<ModelDemosFilterInput | null> | null;
  not?: ModelDemosFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelDemosConnection = {
  __typename: "ModelDemosConnection";
  items: Array<Demos | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelDocumentationFilterInput = {
  id?: ModelIDInput | null;
  public?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  updatedOn?: ModelStringInput | null;
  and?: Array<ModelDocumentationFilterInput | null> | null;
  or?: Array<ModelDocumentationFilterInput | null> | null;
  not?: ModelDocumentationFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelDocumentationConnection = {
  __typename: "ModelDocumentationConnection";
  items: Array<Documentation | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSupportFilterInput = {
  id?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  topic?: ModelMainSupportTopicsInput | null;
  updatedOn?: ModelStringInput | null;
  openedOn?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  details?: ModelStringInput | null;
  status?: ModelWebsiteStatusesInput | null;
  and?: Array<ModelSupportFilterInput | null> | null;
  or?: Array<ModelSupportFilterInput | null> | null;
  not?: ModelSupportFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSupportConnection = {
  __typename: "ModelSupportConnection";
  items: Array<Support | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionAnalyticsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionAnalyticsFilterInput | null> | null;
  or?: Array<ModelSubscriptionAnalyticsFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCompaniesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  legalName?: ModelSubscriptionStringInput | null;
  tradingName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  password?: ModelSubscriptionStringInput | null;
  lastPasswordGen?: ModelSubscriptionStringInput | null;
  stripeId?: ModelSubscriptionStringInput | null;
  registeredOn?: ModelSubscriptionStringInput | null;
  updatedOn?: ModelSubscriptionStringInput | null;
  refreshTokens?: ModelSubscriptionStringInput | null;
  recoveryCode?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCompaniesFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompaniesFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionDemosFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phoneNumber?: ModelSubscriptionStringInput | null;
  details?: ModelSubscriptionStringInput | null;
  openedOn?: ModelSubscriptionStringInput | null;
  updatedOn?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDemosFilterInput | null> | null;
  or?: Array<ModelSubscriptionDemosFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionDocumentationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  public?: ModelSubscriptionBooleanInput | null;
  title?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  updatedOn?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDocumentationFilterInput | null> | null;
  or?: Array<ModelSubscriptionDocumentationFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionSupportFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  topic?: ModelSubscriptionStringInput | null;
  updatedOn?: ModelSubscriptionStringInput | null;
  openedOn?: ModelSubscriptionStringInput | null;
  subject?: ModelSubscriptionStringInput | null;
  details?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSupportFilterInput | null> | null;
  or?: Array<ModelSubscriptionSupportFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type CreateAnalyticsMutationVariables = {
  input: CreateAnalyticsInput;
  condition?: ModelAnalyticsConditionInput | null;
};

export type CreateAnalyticsMutation = {
  createAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateAnalyticsMutationVariables = {
  input: UpdateAnalyticsInput;
  condition?: ModelAnalyticsConditionInput | null;
};

export type UpdateAnalyticsMutation = {
  updateAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteAnalyticsMutationVariables = {
  input: DeleteAnalyticsInput;
  condition?: ModelAnalyticsConditionInput | null;
};

export type DeleteAnalyticsMutation = {
  deleteAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateCompaniesMutationVariables = {
  input: CreateCompaniesInput;
  condition?: ModelCompaniesConditionInput | null;
};

export type CreateCompaniesMutation = {
  createCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateCompaniesMutationVariables = {
  input: UpdateCompaniesInput;
  condition?: ModelCompaniesConditionInput | null;
};

export type UpdateCompaniesMutation = {
  updateCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteCompaniesMutationVariables = {
  input: DeleteCompaniesInput;
  condition?: ModelCompaniesConditionInput | null;
};

export type DeleteCompaniesMutation = {
  deleteCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateDemosMutationVariables = {
  input: CreateDemosInput;
  condition?: ModelDemosConditionInput | null;
};

export type CreateDemosMutation = {
  createDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateDemosMutationVariables = {
  input: UpdateDemosInput;
  condition?: ModelDemosConditionInput | null;
};

export type UpdateDemosMutation = {
  updateDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteDemosMutationVariables = {
  input: DeleteDemosInput;
  condition?: ModelDemosConditionInput | null;
};

export type DeleteDemosMutation = {
  deleteDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateDocumentationMutationVariables = {
  input: CreateDocumentationInput;
  condition?: ModelDocumentationConditionInput | null;
};

export type CreateDocumentationMutation = {
  createDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateDocumentationMutationVariables = {
  input: UpdateDocumentationInput;
  condition?: ModelDocumentationConditionInput | null;
};

export type UpdateDocumentationMutation = {
  updateDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteDocumentationMutationVariables = {
  input: DeleteDocumentationInput;
  condition?: ModelDocumentationConditionInput | null;
};

export type DeleteDocumentationMutation = {
  deleteDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateSupportMutationVariables = {
  input: CreateSupportInput;
  condition?: ModelSupportConditionInput | null;
};

export type CreateSupportMutation = {
  createSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateSupportMutationVariables = {
  input: UpdateSupportInput;
  condition?: ModelSupportConditionInput | null;
};

export type UpdateSupportMutation = {
  updateSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteSupportMutationVariables = {
  input: DeleteSupportInput;
  condition?: ModelSupportConditionInput | null;
};

export type DeleteSupportMutation = {
  deleteSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type GetAnalyticsQueryVariables = {
  id: string;
};

export type GetAnalyticsQuery = {
  getAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListAnalyticsQueryVariables = {
  filter?: ModelAnalyticsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAnalyticsQuery = {
  listAnalytics?: {
    __typename: "ModelAnalyticsConnection";
    items: Array<{
      __typename: "Analytics";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncAnalyticsQueryVariables = {
  filter?: ModelAnalyticsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncAnalyticsQuery = {
  syncAnalytics?: {
    __typename: "ModelAnalyticsConnection";
    items: Array<{
      __typename: "Analytics";
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCompaniesQueryVariables = {
  id: string;
};

export type GetCompaniesQuery = {
  getCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompaniesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompaniesQuery = {
  listCompanies?: {
    __typename: "ModelCompaniesConnection";
    items: Array<{
      __typename: "Companies";
      id: string;
      legalName: string;
      tradingName: string;
      email: string;
      password: string;
      lastPasswordGen: string;
      stripeId?: string | null;
      registeredOn: string;
      updatedOn: string;
      refreshTokens?: Array<string> | null;
      recoveryCode?: string | null;
      status: MainSupportStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCompaniesQueryVariables = {
  filter?: ModelCompaniesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCompaniesQuery = {
  syncCompanies?: {
    __typename: "ModelCompaniesConnection";
    items: Array<{
      __typename: "Companies";
      id: string;
      legalName: string;
      tradingName: string;
      email: string;
      password: string;
      lastPasswordGen: string;
      stripeId?: string | null;
      registeredOn: string;
      updatedOn: string;
      refreshTokens?: Array<string> | null;
      recoveryCode?: string | null;
      status: MainSupportStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetDemosQueryVariables = {
  id: string;
};

export type GetDemosQuery = {
  getDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListDemosQueryVariables = {
  filter?: ModelDemosFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDemosQuery = {
  listDemos?: {
    __typename: "ModelDemosConnection";
    items: Array<{
      __typename: "Demos";
      id: string;
      name: string;
      companyName: string;
      email: string;
      phoneNumber: string;
      details: string;
      openedOn: string;
      updatedOn: string;
      status: DemosStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncDemosQueryVariables = {
  filter?: ModelDemosFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncDemosQuery = {
  syncDemos?: {
    __typename: "ModelDemosConnection";
    items: Array<{
      __typename: "Demos";
      id: string;
      name: string;
      companyName: string;
      email: string;
      phoneNumber: string;
      details: string;
      openedOn: string;
      updatedOn: string;
      status: DemosStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetDocumentationQueryVariables = {
  id: string;
};

export type GetDocumentationQuery = {
  getDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListDocumentationsQueryVariables = {
  filter?: ModelDocumentationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDocumentationsQuery = {
  listDocumentations?: {
    __typename: "ModelDocumentationConnection";
    items: Array<{
      __typename: "Documentation";
      id: string;
      public: boolean;
      title: string;
      content: string;
      updatedOn: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncDocumentationsQueryVariables = {
  filter?: ModelDocumentationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncDocumentationsQuery = {
  syncDocumentations?: {
    __typename: "ModelDocumentationConnection";
    items: Array<{
      __typename: "Documentation";
      id: string;
      public: boolean;
      title: string;
      content: string;
      updatedOn: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetSupportQueryVariables = {
  id: string;
};

export type GetSupportQuery = {
  getSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListSupportsQueryVariables = {
  filter?: ModelSupportFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSupportsQuery = {
  listSupports?: {
    __typename: "ModelSupportConnection";
    items: Array<{
      __typename: "Support";
      id: string;
      companyName: string;
      email: string;
      topic: MainSupportTopics;
      updatedOn: string;
      openedOn: string;
      subject: string;
      details: string;
      status: WebsiteStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncSupportsQueryVariables = {
  filter?: ModelSupportFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncSupportsQuery = {
  syncSupports?: {
    __typename: "ModelSupportConnection";
    items: Array<{
      __typename: "Support";
      id: string;
      companyName: string;
      email: string;
      topic: MainSupportTopics;
      updatedOn: string;
      openedOn: string;
      subject: string;
      details: string;
      status: WebsiteStatuses;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsFilterInput | null;
};

export type OnCreateAnalyticsSubscription = {
  onCreateAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsFilterInput | null;
};

export type OnUpdateAnalyticsSubscription = {
  onUpdateAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteAnalyticsSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsFilterInput | null;
};

export type OnDeleteAnalyticsSubscription = {
  onDeleteAnalytics?: {
    __typename: "Analytics";
    id: string;
    traffic: Array<{
      __typename: "Traffic";
      day: string;
      number: string;
    }>;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null;
};

export type OnCreateCompaniesSubscription = {
  onCreateCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null;
};

export type OnUpdateCompaniesSubscription = {
  onUpdateCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null;
};

export type OnDeleteCompaniesSubscription = {
  onDeleteCompanies?: {
    __typename: "Companies";
    id: string;
    legalName: string;
    tradingName: string;
    email: string;
    password: string;
    lastPasswordGen: string;
    billingAddress?: {
      __typename: "BillingAddress";
      number: string;
      streetName: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    } | null;
    planHistory?: Array<{
      __typename: "PlanHistory";
      current: boolean;
      plan: PlanTypes;
      since: string;
      exp?: string | null;
      price?: number | null;
    }> | null;
    stripeId?: string | null;
    registeredOn: string;
    updatedOn: string;
    refreshTokens?: Array<string> | null;
    recoveryCode?: string | null;
    status: MainSupportStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateDemosSubscriptionVariables = {
  filter?: ModelSubscriptionDemosFilterInput | null;
};

export type OnCreateDemosSubscription = {
  onCreateDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateDemosSubscriptionVariables = {
  filter?: ModelSubscriptionDemosFilterInput | null;
};

export type OnUpdateDemosSubscription = {
  onUpdateDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteDemosSubscriptionVariables = {
  filter?: ModelSubscriptionDemosFilterInput | null;
};

export type OnDeleteDemosSubscription = {
  onDeleteDemos?: {
    __typename: "Demos";
    id: string;
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    details: string;
    openedOn: string;
    updatedOn: string;
    status: DemosStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateDocumentationSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentationFilterInput | null;
};

export type OnCreateDocumentationSubscription = {
  onCreateDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateDocumentationSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentationFilterInput | null;
};

export type OnUpdateDocumentationSubscription = {
  onUpdateDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteDocumentationSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentationFilterInput | null;
};

export type OnDeleteDocumentationSubscription = {
  onDeleteDocumentation?: {
    __typename: "Documentation";
    id: string;
    public: boolean;
    title: string;
    content: string;
    updatedOn: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null;
};

export type OnCreateSupportSubscription = {
  onCreateSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null;
};

export type OnUpdateSupportSubscription = {
  onUpdateSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteSupportSubscriptionVariables = {
  filter?: ModelSubscriptionSupportFilterInput | null;
};

export type OnDeleteSupportSubscription = {
  onDeleteSupport?: {
    __typename: "Support";
    id: string;
    companyName: string;
    email: string;
    topic: MainSupportTopics;
    updatedOn: string;
    openedOn: string;
    subject: string;
    details: string;
    status: WebsiteStatuses;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};
