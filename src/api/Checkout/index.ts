import { PaymentGateway } from "../../fragments/gqlTypes/PaymentGateway";
import { ErrorListener } from "../../helpers";
import {
  ICheckoutModel,
  IPaymentModel,
} from "../../helpers/LocalStorageHandler";
import { JobsManager } from "../../jobs";
import { SaleorState, SaleorStateLoaded } from "../../state";
import { StateItems } from "../../state/types";

import { PromiseRunResponse } from "../types";
import {
  DataErrorCheckoutTypes,
  FunctionErrorCheckoutTypes,
  IAddress,
  IAvailableShippingMethods,
  ICheckout,
  IPayment,
  IPromoCodeDiscount,
  CreatePaymentInput,
  CompleteCheckoutInput,
} from "./types";

type CheckoutResponse = PromiseRunResponse<
  DataErrorCheckoutTypes,
  FunctionErrorCheckoutTypes
>;

export class SaleorCheckoutAPI extends ErrorListener {
  loaded: boolean;

  checkout?: ICheckout;

  promoCodeDiscount?: IPromoCodeDiscount;

  selectedShippingAddressId?: string;

  availableShippingMethods?: IAvailableShippingMethods;

  availablePaymentGateways?: PaymentGateway[];

  payment?: IPayment;

  private saleorState: SaleorState;

  private jobsManager: JobsManager;

  constructor(saleorState: SaleorState, jobsManager: JobsManager) {
    super();
    this.saleorState = saleorState;
    this.jobsManager = jobsManager;

    this.loaded = false;

    this.saleorState.subscribeToChange(
      StateItems.CHECKOUT,
      (checkout: ICheckoutModel) => {
        const {
          id,
          token,
          email,
          shippingAddress,
          selectedShippingAddressId,
          availablePaymentGateways,
          availableShippingMethods,
          shippingMethod,
          promoCodeDiscount,
        } = checkout || {};
        this.checkout = {
          email,
          id,
          shippingAddress,
          shippingMethod,
          token,
        };
        this.selectedShippingAddressId = selectedShippingAddressId;
        this.availablePaymentGateways = availablePaymentGateways;
        this.availableShippingMethods = availableShippingMethods;
        this.promoCodeDiscount = {
          discountName: promoCodeDiscount?.discountName,
          voucherCode: promoCodeDiscount?.voucherCode,
        };
      }
    );
    this.saleorState.subscribeToChange(
      StateItems.PAYMENT,
      (payment: IPaymentModel) => {
        const { id, token, gateway, creditCard, total } = payment || {};
        this.payment = {
          creditCard,
          gateway,
          id,
          token,
          total,
        };
      }
    );
    this.saleorState.subscribeToChange(
      StateItems.LOADED,
      (loaded: SaleorStateLoaded) => {
        this.loaded = loaded.checkout && loaded.payment;
      }
    );
  }

  setShippingAddress = async (
    shippingAddress: IAddress,
    email: string
  ): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;
    const alteredLines = this.saleorState.checkout?.lines?.map(item => ({
      quantity: item!.quantity,
      variantId: item?.variant!.id,
    }));

    if (alteredLines && checkoutId) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "setShippingAddress",
        {
          checkoutId,
          email,
          selectedShippingAddressId: shippingAddress.id,
          shippingAddress,
        }
      );

      return {
        data,
        dataError,
        pending: false,
      };
    }
    if (alteredLines) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "createCheckout",
        {
          email,
          lines: alteredLines,
          selectedShippingAddressId: shippingAddress.id,
          shippingAddress,
        }
      );

      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to add items to cart before setting shipping address."
        ),
        type: FunctionErrorCheckoutTypes.ITEMS_NOT_ADDED_TO_CART,
      },
      pending: false,
    };
  };

  setShippingMethod = async (shippingMethodId: string): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;

    if (checkoutId) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "setShippingMethod",
        {
          checkoutId,
          shippingMethodId,
        }
      );
      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to set shipping address before setting shipping method."
        ),
        type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
      },
      pending: false,
    };
  };

  addPromoCode = async (promoCode: string): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;

    if (checkoutId) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "addPromoCode",
        {
          checkoutId,
          promoCode,
        }
      );

      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to set shipping address before modifying promo code."
        ),
        type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
      },
      pending: false,
    };
  };

  removePromoCode = async (promoCode: string): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;

    if (checkoutId) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "removePromoCode",
        { checkoutId, promoCode }
      );

      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to set shipping address before modifying promo code."
        ),
        type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
      },
      pending: false,
    };
  };

  createPayment = async (input: CreatePaymentInput): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;
    const amount = this.saleorState.summaryPrices?.totalPrice?.gross.amount;
    console.log(checkoutId);

    if (checkoutId && amount !== null && amount !== undefined) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "createPayment",
        {
          ...input,
          amount,
          checkoutId,
        }
      );
      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to set billing address before creating payment."
        ),
        type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
      },
      pending: false,
    };
  };

  completeCheckout = async (
    input?: CompleteCheckoutInput
  ): CheckoutResponse => {
    const checkoutId = this.saleorState.checkout?.id;

    if (checkoutId) {
      const { data, dataError } = await this.jobsManager.run(
        "checkout",
        "completeCheckout",
        { ...input, checkoutId }
      );
      return {
        data,
        dataError,
        pending: false,
      };
    }
    return {
      functionError: {
        error: new Error(
          "You need to set shipping address before creating payment."
        ),
        type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
      },
      pending: false,
    };
  };
}
