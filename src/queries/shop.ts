import gql from "graphql-tag";

export const getShop = gql`
  query GetShop {
    shop {
      displayGrossPrices
      homepageBanner {
        name
        items {
          url
          displayName
          title
          imageUrl
        }
      }
      homepageSlider {
        name
        items {
          url
          displayName
          title
          imageUrl
        }
      }
    }
  }
`;
