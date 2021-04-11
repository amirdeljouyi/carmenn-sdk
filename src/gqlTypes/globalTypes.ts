/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum AccountErrorCode {
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_SERVICE_ACCOUNT = "OUT_OF_SCOPE_SERVICE_ACCOUNT",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum AddressTypeEnum {
  SHIPPING = "SHIPPING",
}

/**
 * An enumeration.
 */
export enum CheckoutErrorCode {
  CHECKOUT_NOT_FULLY_PAID = "CHECKOUT_NOT_FULLY_PAID",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  INVALID = "INVALID",
  INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
  NOT_FOUND = "NOT_FOUND",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
  QUANTITY_GREATER_THAN_LIMIT = "QUANTITY_GREATER_THAN_LIMIT",
  REQUIRED = "REQUIRED",
  SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
  SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
  SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
  SHIPPING_NOT_REQUIRED = "SHIPPING_NOT_REQUIRED",
  TAX_ERROR = "TAX_ERROR",
  UNIQUE = "UNIQUE",
  VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
  ZERO_QUANTITY = "ZERO_QUANTITY",
}

export enum CollectionPublished {
  HIDDEN = "HIDDEN",
  PUBLISHED = "PUBLISHED",
}

export enum CollectionSortField {
  AVAILABILITY = "AVAILABILITY",
  DATE = "DATE",
  NAME = "NAME",
  PRODUCT_COUNT = "PRODUCT_COUNT",
}

/**
 * An enumeration.
 */
export enum JobStatusEnum {
  DELETED = "DELETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * An enumeration.
 */
export enum OrderStatus {
  CANCELED = "CANCELED",
  DRAFT = "DRAFT",
  FULFILLED = "FULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  UNFULFILLED = "UNFULFILLED",
}

/**
 * An enumeration.
 */
export enum PaymentChargeStatusEnum {
  FULLY_CHARGED = "FULLY_CHARGED",
  FULLY_REFUNDED = "FULLY_REFUNDED",
  NOT_CHARGED = "NOT_CHARGED",
  PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
}

/**
 * An enumeration.
 */
export enum PaymentErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
  NOT_FOUND = "NOT_FOUND",
  PARTIAL_PAYMENT_NOT_ALLOWED = "PARTIAL_PAYMENT_NOT_ALLOWED",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  REQUIRED = "REQUIRED",
  SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
  SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
  UNIQUE = "UNIQUE",
}

export enum ProductOrderField {
  DATE = "DATE",
  MINIMAL_PRICE = "MINIMAL_PRICE",
  NAME = "NAME",
  PRICE = "PRICE",
  PUBLISHED = "PUBLISHED",
  TYPE = "TYPE",
}

export enum StockAvailability {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

export interface AccountInput {
  firstName?: string | null;
  lastName?: string | null;
  defaultShippingAddress?: AddressInput | null;
}

export interface AddressInput {
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  streetAddress1?: string | null;
  streetAddress2?: string | null;
  city?: string | null;
  cityArea?: string | null;
  postalCode?: string | null;
  phone?: string | null;
}

export interface AttributeInput {
  slug: string;
  value?: string | null;
  values?: (string | null)[] | null;
}

export interface CheckoutCreateInput {
  lines: (CheckoutLineInput | null)[];
  email?: string | null;
  shippingAddress?: AddressInput | null;
}

export interface CheckoutLineInput {
  quantity: number;
  variantId: string;
}

export interface CollectionFilterInput {
  published?: CollectionPublished | null;
  search?: string | null;
  ids?: (string | null)[] | null;
}

export interface CollectionSortingInput {
  direction: OrderDirection;
  field: CollectionSortField;
}

export interface IntRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface PaymentInput {
  gateway: string;
  token?: string | null;
  amount?: any | null;
  returnUrl?: string | null;
}

export interface PriceRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface ProductFilterInput {
  isPublished?: boolean | null;
  collections?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  hasCategory?: boolean | null;
  price?: PriceRangeInput | null;
  attributes?: (AttributeInput | null)[] | null;
  stockAvailability?: StockAvailability | null;
  productType?: string | null;
  stocks?: ProductStockFilterInput | null;
  search?: string | null;
  minimalPrice?: PriceRangeInput | null;
  productTypes?: (string | null)[] | null;
}

export interface ProductOrder {
  direction: OrderDirection;
  attributeId?: string | null;
  field?: ProductOrderField | null;
}

export interface ProductStockFilterInput {
  warehouseIds?: string[] | null;
  quantity?: IntRangeInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
