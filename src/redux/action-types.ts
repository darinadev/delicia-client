import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_IS_FETCHING,
  SET_ADDING_IN_PROGRESS,
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_CURRENT_CATEGORY,
} from "./constants";
import { CartProductType } from "../types/types";

type AddProductToCartType = {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    totalProductPrice: number;
  };
};

type RemoveProductFromCartType = {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  productId: number;
};

type IncreaseQuantityType = {
  type: typeof INCREASE_QUANTITY;
  productId: number;
};

type DecreaseQuantityType = {
  type: typeof DECREASE_QUANTITY;
  productId: number;
};

type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  payload: {
    isFetching: boolean;
  };
};

type SetAddingInProgressType = {
  type: typeof SET_ADDING_IN_PROGRESS;
  isFetching: boolean;
  productId: number;
};

type SetProductsType = {
  type: typeof SET_PRODUCTS;
  payload: {
    products: Array<CartProductType>;
  };
};

type ClearProductsType = {
  type: typeof CLEAR_PRODUCTS;
};

type SetCurrentCategoryType = {
  type: typeof SET_CURRENT_CATEGORY;
  currentCategory: string;
};

export type MenuActionTypes = SetCurrentCategoryType;
export type CartActionTypes =
  | AddProductToCartType
  | RemoveProductFromCartType
  | IncreaseQuantityType
  | DecreaseQuantityType
  | SetIsFetchingType
  | SetAddingInProgressType
  | SetProductsType
  | ClearProductsType;
