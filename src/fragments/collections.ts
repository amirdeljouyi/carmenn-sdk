import gql from "graphql-tag";
import { baseProductFragment, productPricingFragment } from "./products";
import { pageInfo } from "./pageInfo";

export const baseCollectionFragment = gql`
  fragment BaseCollection on Collection {
    id
    name
    slug
    backgroundImage {
      alt
      url
    }
  }
`;

export const collectionFragment = gql`
  ${baseCollectionFragment}
  ${baseProductFragment}
  ${productPricingFragment}
  ${pageInfo}
  fragment CollectionDetails on Collection {
    ...BaseCollection
    description
    descriptionJson
    products(first: 10) {
      edges {
        node {
          ...BaseProduct
          ...ProductPricingField
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;
