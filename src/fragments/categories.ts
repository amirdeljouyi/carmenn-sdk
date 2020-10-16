import gql from "graphql-tag";
// import {baseProductFragment, productPricingFragment} from  './products'
export const baseCategoryFragment = gql`
  fragment BaseCategory on Category {
    id
    name
    slug
  }
`;

// export const categoryWithProductsFragment = gql`
//     ${baseProductFragment}
//     ${productPricingFragment}
//     fragment CategoryWithProducts on Category {
//         id
//         name
//         products(first: 3) {
//             edges {
//                 node {
//                     ...BaseProduct
//                     ...ProductPricingField
//                     categories {
//                         id
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `;

export const categoryFragment = gql`
  ${baseCategoryFragment}
  fragment CategoryDetails on Category {
    ...BaseCategory
    backgroundImage {
      alt
      url
    }
    description
    descriptionJson
  }
`;
