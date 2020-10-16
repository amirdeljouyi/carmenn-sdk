/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressInput, AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserAddress
// ====================================================

export interface CreateUserAddress_accountAddressCreate_errors {
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

export interface CreateUserAddress_accountAddressCreate_user_defaultShippingAddress {
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

export interface CreateUserAddress_accountAddressCreate_user_addresses {
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

export interface CreateUserAddress_accountAddressCreate_user {
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
  defaultShippingAddress: CreateUserAddress_accountAddressCreate_user_defaultShippingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (CreateUserAddress_accountAddressCreate_user_addresses | null)[] | null;
}

export interface CreateUserAddress_accountAddressCreate {
  __typename: "AccountAddressCreate";
  errors: CreateUserAddress_accountAddressCreate_errors[];
  /**
   * A user instance for which the address was created.
   */
  user: CreateUserAddress_accountAddressCreate_user | null;
}

export interface CreateUserAddress {
  /**
   * Create a new address for the customer.
   */
  accountAddressCreate: CreateUserAddress_accountAddressCreate | null;
}

export interface CreateUserAddressVariables {
  input: AddressInput;
}
