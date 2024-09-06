/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAnalytics =
  /* GraphQL */ `subscription OnCreateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onCreateAnalytics(filter: $filter) {
    id
    traffic {
      day
      number
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnCreateAnalyticsSubscriptionVariables, APITypes.OnCreateAnalyticsSubscription>;
export const onUpdateAnalytics =
  /* GraphQL */ `subscription OnUpdateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onUpdateAnalytics(filter: $filter) {
    id
    traffic {
      day
      number
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnUpdateAnalyticsSubscriptionVariables, APITypes.OnUpdateAnalyticsSubscription>;
export const onDeleteAnalytics =
  /* GraphQL */ `subscription OnDeleteAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onDeleteAnalytics(filter: $filter) {
    id
    traffic {
      day
      number
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnDeleteAnalyticsSubscriptionVariables, APITypes.OnDeleteAnalyticsSubscription>;
export const onCreateCompanies =
  /* GraphQL */ `subscription OnCreateCompanies($filter: ModelSubscriptionCompaniesFilterInput) {
  onCreateCompanies(filter: $filter) {
    id
    legalName
    tradingName
    email
    password
    lastPasswordGen
    billingAddress {
      number
      streetName
      city
      state
      zip
      country
      __typename
    }
    planHistory {
      current
      plan
      since
      exp
      price
      __typename
    }
    stripeId
    registeredOn
    updatedOn
    refreshTokens
    recoveryCode
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnCreateCompaniesSubscriptionVariables, APITypes.OnCreateCompaniesSubscription>;
export const onUpdateCompanies =
  /* GraphQL */ `subscription OnUpdateCompanies($filter: ModelSubscriptionCompaniesFilterInput) {
  onUpdateCompanies(filter: $filter) {
    id
    legalName
    tradingName
    email
    password
    lastPasswordGen
    billingAddress {
      number
      streetName
      city
      state
      zip
      country
      __typename
    }
    planHistory {
      current
      plan
      since
      exp
      price
      __typename
    }
    stripeId
    registeredOn
    updatedOn
    refreshTokens
    recoveryCode
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnUpdateCompaniesSubscriptionVariables, APITypes.OnUpdateCompaniesSubscription>;
export const onDeleteCompanies =
  /* GraphQL */ `subscription OnDeleteCompanies($filter: ModelSubscriptionCompaniesFilterInput) {
  onDeleteCompanies(filter: $filter) {
    id
    legalName
    tradingName
    email
    password
    lastPasswordGen
    billingAddress {
      number
      streetName
      city
      state
      zip
      country
      __typename
    }
    planHistory {
      current
      plan
      since
      exp
      price
      __typename
    }
    stripeId
    registeredOn
    updatedOn
    refreshTokens
    recoveryCode
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnDeleteCompaniesSubscriptionVariables, APITypes.OnDeleteCompaniesSubscription>;
export const onCreateDemos = /* GraphQL */ `subscription OnCreateDemos($filter: ModelSubscriptionDemosFilterInput) {
  onCreateDemos(filter: $filter) {
    id
    name
    companyName
    email
    phoneNumber
    details
    openedOn
    updatedOn
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnCreateDemosSubscriptionVariables, APITypes.OnCreateDemosSubscription>;
export const onUpdateDemos = /* GraphQL */ `subscription OnUpdateDemos($filter: ModelSubscriptionDemosFilterInput) {
  onUpdateDemos(filter: $filter) {
    id
    name
    companyName
    email
    phoneNumber
    details
    openedOn
    updatedOn
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnUpdateDemosSubscriptionVariables, APITypes.OnUpdateDemosSubscription>;
export const onDeleteDemos = /* GraphQL */ `subscription OnDeleteDemos($filter: ModelSubscriptionDemosFilterInput) {
  onDeleteDemos(filter: $filter) {
    id
    name
    companyName
    email
    phoneNumber
    details
    openedOn
    updatedOn
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnDeleteDemosSubscriptionVariables, APITypes.OnDeleteDemosSubscription>;
export const onCreateDocumentation = /* GraphQL */ `subscription OnCreateDocumentation(
  $filter: ModelSubscriptionDocumentationFilterInput
) {
  onCreateDocumentation(filter: $filter) {
    id
    public
    title
    content
    updatedOn
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDocumentationSubscriptionVariables,
  APITypes.OnCreateDocumentationSubscription
>;
export const onUpdateDocumentation = /* GraphQL */ `subscription OnUpdateDocumentation(
  $filter: ModelSubscriptionDocumentationFilterInput
) {
  onUpdateDocumentation(filter: $filter) {
    id
    public
    title
    content
    updatedOn
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDocumentationSubscriptionVariables,
  APITypes.OnUpdateDocumentationSubscription
>;
export const onDeleteDocumentation = /* GraphQL */ `subscription OnDeleteDocumentation(
  $filter: ModelSubscriptionDocumentationFilterInput
) {
  onDeleteDocumentation(filter: $filter) {
    id
    public
    title
    content
    updatedOn
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDocumentationSubscriptionVariables,
  APITypes.OnDeleteDocumentationSubscription
>;
export const onCreateSupport =
  /* GraphQL */ `subscription OnCreateSupport($filter: ModelSubscriptionSupportFilterInput) {
  onCreateSupport(filter: $filter) {
    id
    companyName
    email
    topic
    updatedOn
    openedOn
    subject
    details
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnCreateSupportSubscriptionVariables, APITypes.OnCreateSupportSubscription>;
export const onUpdateSupport =
  /* GraphQL */ `subscription OnUpdateSupport($filter: ModelSubscriptionSupportFilterInput) {
  onUpdateSupport(filter: $filter) {
    id
    companyName
    email
    topic
    updatedOn
    openedOn
    subject
    details
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnUpdateSupportSubscriptionVariables, APITypes.OnUpdateSupportSubscription>;
export const onDeleteSupport =
  /* GraphQL */ `subscription OnDeleteSupport($filter: ModelSubscriptionSupportFilterInput) {
  onDeleteSupport(filter: $filter) {
    id
    companyName
    email
    topic
    updatedOn
    openedOn
    subject
    details
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<APITypes.OnDeleteSupportSubscriptionVariables, APITypes.OnDeleteSupportSubscription>;
