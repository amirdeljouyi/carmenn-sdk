import gql from "graphql-tag";

export const getShop = gql`
  query GetShop {
    shop {
      displayGrossPrices
    }
  }
`;
