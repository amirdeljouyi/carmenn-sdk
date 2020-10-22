/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressInput, AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserAddress
// ====================================================

export interface UpdateUserAddress_accountAddressUpdate_errors {
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

export interface UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress {
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

export interface UpdateUserAddress_accountAddressUpdate_user_addresses {
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

export interface UpdateUserAddress_accountAddressUpdate_user {
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
  defaultShippingAddress: UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (UpdateUserAddress_accountAddressUpdate_user_addresses | null)[] | null;
}

export interface UpdateUserAddress_accountAddressUpdate {
  __typename: "AccountAddressUpdate";
  errors: UpdateUserAddress_accountAddressUpdate_errors[];
  /**
   * A user object for which the address was edited.
   */
  user: UpdateUserAddress_accountAddressUpdate_user | null;
}

export interface UpdateUserAddress {
  /**
   * Updates an address of the logged-in user.
   */
  accountAddressUpdate: UpdateUserAddress_accountAddressUpdate | null;
}

export interface UpdateUserAddressVariables {
  input: AddressInput;
  id: string;
}
