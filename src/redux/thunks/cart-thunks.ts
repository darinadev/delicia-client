import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import {
  setAddingInProgress,
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearProducts,
} from "../reducers/cart-reducer";
import { CartProductType, CreateOrderParamsType } from "../../types/types";

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({
    id,
    title,
    price,
    quantity,
    totalProductPrice
  }: CartProductType) => {
    store.dispatch(setAddingInProgress({ isFetching: true, productId: id }));
    store.dispatch(addProductToCart({ id, title, price, quantity, totalProductPrice }));
    localStorage.setItem("products", JSON.stringify(store.getState().cart.products));
    store.dispatch(setAddingInProgress({ isFetching: false, productId: id }));
  },
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId: number) => {
    store.dispatch(removeProductFromCart(productId));
    localStorage.setItem("products", JSON.stringify(store.getState().cart.products));
  },
);

export const increaseQuantity = createAsyncThunk(
  'cart/increaseQuantity',
  async (productId: number) => {
    store.dispatch(increaseProductQuantity(productId));
    localStorage.setItem("products", JSON.stringify(store.getState().cart.products));
  },
);

export const decreaseQuantity = createAsyncThunk(
  'cart/decreaseQuantity',
  async (productId: number) => {
    store.dispatch(decreaseProductQuantity(productId));
    localStorage.setItem("products", JSON.stringify(store.getState().cart.products));
  },
);

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async ({
    order,
    subtotalPrice
  }: CreateOrderParamsType) => {
    const products: Array<CartProductType> = store.getState().cart.products;
    const shipping: number = store.getState().cart.shipping;
    let totalPrice: number;
    if (order.shipping === "Shipping") {
      totalPrice = subtotalPrice + shipping;
    } else {
      totalPrice = subtotalPrice;
    }
    const orderData = { ...order, products, subtotalPrice, totalPrice };
    console.log(orderData);
    store.dispatch(clearProducts());
    localStorage.removeItem("products");
  },
);
