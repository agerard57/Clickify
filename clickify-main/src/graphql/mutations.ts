/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAnalytics = /* GraphQL */ `mutation CreateAnalytics(
  $input: CreateAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  createAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateAnalyticsMutationVariables, APITypes.CreateAnalyticsMutation>;
export const updateAnalytics = /* GraphQL */ `mutation UpdateAnalytics(
  $input: UpdateAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  updateAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateAnalyticsMutationVariables, APITypes.UpdateAnalyticsMutation>;
export const deleteAnalytics = /* GraphQL */ `mutation DeleteAnalytics(
  $input: DeleteAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  deleteAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteAnalyticsMutationVariables, APITypes.DeleteAnalyticsMutation>;
export const createCompanies = /* GraphQL */ `mutation CreateCompanies(
  $input: CreateCompaniesInput!
  $condition: ModelCompaniesConditionInput
) {
  createCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateCompaniesMutationVariables, APITypes.CreateCompaniesMutation>;
export const updateCompanies = /* GraphQL */ `mutation UpdateCompanies(
  $input: UpdateCompaniesInput!
  $condition: ModelCompaniesConditionInput
) {
  updateCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateCompaniesMutationVariables, APITypes.UpdateCompaniesMutation>;
export const deleteCompanies = /* GraphQL */ `mutation DeleteCompanies(
  $input: DeleteCompaniesInput!
  $condition: ModelCompaniesConditionInput
) {
  deleteCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteCompaniesMutationVariables, APITypes.DeleteCompaniesMutation>;
export const createDemos = /* GraphQL */ `mutation CreateDemos(
  $input: CreateDemosInput!
  $condition: ModelDemosConditionInput
) {
  createDemos(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateDemosMutationVariables, APITypes.CreateDemosMutation>;
export const updateDemos = /* GraphQL */ `mutation UpdateDemos(
  $input: UpdateDemosInput!
  $condition: ModelDemosConditionInput
) {
  updateDemos(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateDemosMutationVariables, APITypes.UpdateDemosMutation>;
export const deleteDemos = /* GraphQL */ `mutation DeleteDemos(
  $input: DeleteDemosInput!
  $condition: ModelDemosConditionInput
) {
  deleteDemos(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteDemosMutationVariables, APITypes.DeleteDemosMutation>;
export const createDocumentation = /* GraphQL */ `mutation CreateDocumentation(
  $input: CreateDocumentationInput!
  $condition: ModelDocumentationConditionInput
) {
  createDocumentation(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateDocumentationMutationVariables, APITypes.CreateDocumentationMutation>;
export const updateDocumentation = /* GraphQL */ `mutation UpdateDocumentation(
  $input: UpdateDocumentationInput!
  $condition: ModelDocumentationConditionInput
) {
  updateDocumentation(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateDocumentationMutationVariables, APITypes.UpdateDocumentationMutation>;
export const deleteDocumentation = /* GraphQL */ `mutation DeleteDocumentation(
  $input: DeleteDocumentationInput!
  $condition: ModelDocumentationConditionInput
) {
  deleteDocumentation(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteDocumentationMutationVariables, APITypes.DeleteDocumentationMutation>;
export const createSupport = /* GraphQL */ `mutation CreateSupport(
  $input: CreateSupportInput!
  $condition: ModelSupportConditionInput
) {
  createSupport(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.CreateSupportMutationVariables, APITypes.CreateSupportMutation>;
export const updateSupport = /* GraphQL */ `mutation UpdateSupport(
  $input: UpdateSupportInput!
  $condition: ModelSupportConditionInput
) {
  updateSupport(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.UpdateSupportMutationVariables, APITypes.UpdateSupportMutation>;
export const deleteSupport = /* GraphQL */ `mutation DeleteSupport(
  $input: DeleteSupportInput!
  $condition: ModelSupportConditionInput
) {
  deleteSupport(input: $input, condition: $condition) {
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
` as GeneratedMutation<APITypes.DeleteSupportMutationVariables, APITypes.DeleteSupportMutation>;
