/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserAddress
// ====================================================

export interface DeleteUserAddress_accountAddressDelete_errors {
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

export interface DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress {
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
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface DeleteUserAddress_accountAddressDelete_user_addresses {
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
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface DeleteUserAddress_accountAddressDelete_user {
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
  defaultShippingAddress: DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (DeleteUserAddress_accountAddressDelete_user_addresses | null)[] | null;
}

export interface DeleteUserAddress_accountAddressDelete {
  __typename: "AccountAddressDelete";
  errors: DeleteUserAddress_accountAddressDelete_errors[];
  /**
   * A user instance for which the address was deleted.
   */
  user: DeleteUserAddress_accountAddressDelete_user | null;
}

export interface DeleteUserAddress {
  /**
   * Delete an address of the logged-in user.
   */
  accountAddressDelete: DeleteUserAddress_accountAddressDelete | null;
}

export interface DeleteUserAddressVariables {
  addressId: string;
}
