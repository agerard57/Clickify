/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAnalytics = /* GraphQL */ `query GetAnalytics($id: ID!) {
  getAnalytics(id: $id) {
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
` as GeneratedQuery<APITypes.GetAnalyticsQueryVariables, APITypes.GetAnalyticsQuery>;
export const listAnalytics = /* GraphQL */ `query ListAnalytics(
  $filter: ModelAnalyticsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnalytics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListAnalyticsQueryVariables, APITypes.ListAnalyticsQuery>;
export const syncAnalytics = /* GraphQL */ `query SyncAnalytics(
  $filter: ModelAnalyticsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAnalytics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncAnalyticsQueryVariables, APITypes.SyncAnalyticsQuery>;
export const getCompanies = /* GraphQL */ `query GetCompanies($id: ID!) {
  getCompanies(id: $id) {
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
` as GeneratedQuery<APITypes.GetCompaniesQueryVariables, APITypes.GetCompaniesQuery>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompaniesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      legalName
      tradingName
      email
      password
      lastPasswordGen
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCompaniesQueryVariables, APITypes.ListCompaniesQuery>;
export const syncCompanies = /* GraphQL */ `query SyncCompanies(
  $filter: ModelCompaniesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCompanies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      legalName
      tradingName
      email
      password
      lastPasswordGen
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncCompaniesQueryVariables, APITypes.SyncCompaniesQuery>;
export const getDemos = /* GraphQL */ `query GetDemos($id: ID!) {
  getDemos(id: $id) {
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
` as GeneratedQuery<APITypes.GetDemosQueryVariables, APITypes.GetDemosQuery>;
export const listDemos = /* GraphQL */ `query ListDemos(
  $filter: ModelDemosFilterInput
  $limit: Int
  $nextToken: String
) {
  listDemos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDemosQueryVariables, APITypes.ListDemosQuery>;
export const syncDemos = /* GraphQL */ `query SyncDemos(
  $filter: ModelDemosFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDemos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncDemosQueryVariables, APITypes.SyncDemosQuery>;
export const getDocumentation = /* GraphQL */ `query GetDocumentation($id: ID!) {
  getDocumentation(id: $id) {
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
` as GeneratedQuery<APITypes.GetDocumentationQueryVariables, APITypes.GetDocumentationQuery>;
export const listDocumentations = /* GraphQL */ `query ListDocumentations(
  $filter: ModelDocumentationFilterInput
  $limit: Int
  $nextToken: String
) {
  listDocumentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDocumentationsQueryVariables, APITypes.ListDocumentationsQuery>;
export const syncDocumentations = /* GraphQL */ `query SyncDocumentations(
  $filter: ModelDocumentationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDocumentations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncDocumentationsQueryVariables, APITypes.SyncDocumentationsQuery>;
export const getSupport = /* GraphQL */ `query GetSupport($id: ID!) {
  getSupport(id: $id) {
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
` as GeneratedQuery<APITypes.GetSupportQueryVariables, APITypes.GetSupportQuery>;
export const listSupports = /* GraphQL */ `query ListSupports(
  $filter: ModelSupportFilterInput
  $limit: Int
  $nextToken: String
) {
  listSupports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSupportsQueryVariables, APITypes.ListSupportsQuery>;
export const syncSupports = /* GraphQL */ `query SyncSupports(
  $filter: ModelSupportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSupports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncSupportsQueryVariables, APITypes.SyncSupportsQuery>;
