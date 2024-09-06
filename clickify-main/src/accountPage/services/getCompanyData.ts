import { GetCompaniesQuery } from "@/API";
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult, graphqlOperation } from "@aws-amplify/api";

import { getCompanies } from "@/graphql/queries";
import { Companies } from "@/models";
import { API } from "aws-amplify";
// eslint-disable-next-line import/no-unresolved

export const getCompanyData = async () => {
  // TODO Clean comments below
  // TODO Add return type / transformer
  // TODO Limit the fetched object to avoid taking sensitive infos
  // TODO Auth
  try {
    /*  
     const todoData = await DataStore.save(
        new Documentation({
          public: false,
          title: "Deez",
          content: "Nuts",
          updatedOn: new Date().toISOString(),
        }),
      ); 
      */
    /*       const todoData = await DataStore.save(
        new Companies({
          legalName: "Example Corp",
          tradingName: "Example",
          email: "example@example.com",
          password: "examplePassword",
          lastPasswordGen: new Date().toISOString(),
          billingAddress: {
            number: "123",
            streetName: "Main Street",
            city: "Example City",
            state: "Example State",
            zip: "12345",
            country: "Example Country",
          },
          planHistory: [],
          registeredOn: new Date().toISOString(),
          updatedOn: new Date().toISOString(),
          status: MainSupportStatuses.IN_PROGRESS,
        }),
      ); */
    const { data }: GraphQLResult<GetCompaniesQuery> = (await API.graphql({
      query: getCompanies,
      variables: {
        id: "e1648496-2893-43c0-9224-9ff78715a180",
      },
    })) as GraphQLResult<GetCompaniesQuery>;

    return data.getCompanies;
  } catch (err) {
    return err;
  }
};
