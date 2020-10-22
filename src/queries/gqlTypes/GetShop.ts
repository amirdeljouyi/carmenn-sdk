/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShop
// ====================================================

export interface GetShop_shop_homepageBanner_items {
  __typename: "BannerItem";
  /**
   * Url of FeaturedItem
   */
  url: string | null;
  /**
   * Name of FeaturedItem
   */
  displayName: string | null;
  title: string;
  /**
   * image url of FeaturedItem
   */
  imageUrl: string | null;
}

export interface GetShop_shop_homepageBanner {
  __typename: "Banner";
  /**
   * Slider name
   */
  name: string;
  items: (GetShop_shop_homepageBanner_items | null)[] | null;
}

export interface GetShop_shop_homepageSlider_items {
  __typename: "SliderItem";
  /**
   * Url of FeaturedItem
   */
  url: string | null;
  /**
   * Name of FeaturedItem
   */
  displayName: string | null;
  title: string;
  /**
   * image url of FeaturedItem
   */
  imageUrl: string | null;
}

export interface GetShop_shop_homepageSlider {
  __typename: "Slider";
  /**
   * Slider name
   */
  name: string;
  items: (GetShop_shop_homepageSlider_items | null)[] | null;
}

export interface GetShop_shop {
  __typename: "Shop";
  /**
   * Display prices with tax in store.
   */
  displayGrossPrices: boolean;
  /**
   * homepage banner
   */
  homepageBanner: GetShop_shop_homepageBanner | null;
  /**
   * homepage slider
   */
  homepageSlider: GetShop_shop_homepageSlider | null;
}

export interface GetShop {
  /**
   * Return information about the shop.
   */
  shop: GetShop_shop;
}
