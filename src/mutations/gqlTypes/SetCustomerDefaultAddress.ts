/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressTypeEnum, AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: SetCustomerDefaultAddress
// ====================================================

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  /**
   * Designates whether the user can log into this admin site.
   */
  isStaff: boolean;
  defaultShippingAddress: SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses | null)[] | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress {
  __typename: "AccountSetDefaultAddress";
  errors: SetCustomerDefaultAddress_accountSetDefaultAddress_errors[];
  /**
   * An updated user instance.
   */
  user: SetCustomerDefaultAddress_accountSetDefaultAddress_user | null;
}

export interface SetCustomerDefaultAddress {
  /**
   * Sets a default address for the authenticated user.
   */
  accountSetDefaultAddress: SetCustomerDefaultAddress_accountSetDefaultAddress | null;
}

export interface SetCustomerDefaultAddressVariables {
  id: string;
  type: AddressTypeEnum;
}
