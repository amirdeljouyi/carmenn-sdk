/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShop
// ====================================================

export interface GetShop_shop {
  __typename: "Shop";
  /**
   * Display prices with tax in store.
   */
  displayGrossPrices: boolean;
}

export interface GetShop {
  /**
   * Return information about the shop.
   */
  shop: GetShop_shop;
}
