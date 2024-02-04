import { ThunkAction } from "redux-thunk";
import { OrderingInfoType, CartProductType } from "../../types/types";
import { CartActionTypes } from "../action-types";
import { AppStateType } from "../store";
import {
  ADD_PRODUCT_TO_CART,
  SET_IS_FETCHING,
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_ADDING_IN_PROGRESS,
} from "../constants";

export const addProductToCart: (
  id: number,
  title: string,
  price: number,
  quantity: number,
  totalProductPrice: number
) => CartActionTypes = (id, title, price, quantity, totalProductPrice) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { id, title, price, quantity, totalProductPrice },
});

export const removeProductFromCart: (productId: number) => CartActionTypes = (
  productId
) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  productId,
});

export const increaseProductQuantity: (productId: number) => CartActionTypes = (
  productId
) => ({
  type: INCREASE_QUANTITY,
  productId,
});

export const decreaseProductQuantity: (productId: number) => CartActionTypes = (
  productId: number
) => ({
  type: DECREASE_QUANTITY,
  productId,
});

export const setIsFetching: (isFetching: boolean) => CartActionTypes = (
  isFetching
) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

export const setAddingInProgress: (
  isFetching: boolean,
  productId: number
) => CartActionTypes = (isFetching, productId) => ({
  type: SET_ADDING_IN_PROGRESS,
  isFetching,
  productId,
});

export const setProducts: (
  products: Array<CartProductType>
) => CartActionTypes = (products) => ({
  type: SET_PRODUCTS,
  payload: { products },
});

export const clearProducts: () => CartActionTypes = () => ({
  type: CLEAR_PRODUCTS,
});

export const addToCart =
  (
    id: number,
    title: string,
    price: number,
    quantity: number,
    totalProductPrice: number
  ): ThunkType =>
  async (dispatch, getState) => {
    dispatch(setAddingInProgress(true, id));
    dispatch(addProductToCart(id, title, price, quantity, totalProductPrice));
    localStorage.setItem("products", JSON.stringify(getState().cart.products));
    dispatch(setAddingInProgress(false, id));
  };

export const removeFromCart =
  (productId: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(removeProductFromCart(productId));
    localStorage.setItem("products", JSON.stringify(getState().cart.products));
  };

export const increaseQuantity =
  (productId: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(increaseProductQuantity(productId));
    localStorage.setItem("products", JSON.stringify(getState().cart.products));
  };

export const decreaseQuantity =
  (productId: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(decreaseProductQuantity(productId));
    localStorage.setItem("products", JSON.stringify(getState().cart.products));
  };

export const createOrder =
  (order: OrderingInfoType, subtotalPrice: number): ThunkType =>
  async (dispatch, getState) => {
    const products: Array<CartProductType> = getState().cart.products;
    const shipping: number = getState().cart.shipping;
    let totalPrice: number;
    if (order.shipping === "Shipping") {
      totalPrice = subtotalPrice + shipping;
    } else {
      totalPrice = subtotalPrice;
    }
    const orderData = { ...order, products, subtotalPrice, totalPrice };
    console.log(orderData);
    dispatch(clearProducts());
    localStorage.removeItem("products");
  };

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  CartActionTypes
>;
