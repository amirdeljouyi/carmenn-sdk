import gql from "graphql-tag";
import { paymentGatewayFragment } from "./payment";

export const checkoutPriceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const checkoutAddressFragment = gql`
  fragment Address on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    phone
    isDefaultShippingAddress
  }
`;

export const checkoutProductVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariant on ProductVariant {
    id
    name
    sku
    quantityAvailable
    isAvailable
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
    color {
      name
      hex
    }
    product {
      id
      name
      thumbnail {
        url
        alt
      }
      thumbnail2x: thumbnail(size: 510) {
        url
      }
      productType {
        id
      }
    }
  }
`;

export const checkoutShippingMethodFragment = gql`
  fragment ShippingMethod on ShippingMethod {
    id
    name
    price {
      currency
      amount
    }
  }
`;

export const checkoutLineFragment = gql`
  ${checkoutPriceFragment}
  ${checkoutProductVariantFragment}
  fragment CheckoutLine on CheckoutLine {
    id
    quantity
    totalPrice {
      ...Price
    }
    variant {
      ...ProductVariant
    }
  }
`;

export const checkoutFragment = gql`
  ${checkoutLineFragment}
  ${checkoutAddressFragment}
  ${checkoutPriceFragment}
  ${checkoutShippingMethodFragment}
  ${paymentGatewayFragment}
  fragment Checkout on Checkout {
    token
    id
    totalPrice {
      ...Price
    }
    subtotalPrice {
      ...Price
    }
    shippingAddress {
      ...Address
    }
    email
    availableShippingMethods {
      ...ShippingMethod
    }
    shippingMethod {
      ...ShippingMethod
    }
    shippingPrice {
      ...Price
    }
    lines {
      ...CheckoutLine
    }
    discount {
      currency
      amount
    }
    discountName
    voucherCode
    availablePaymentGateways {
      ...PaymentGateway
    }
  }
`;
