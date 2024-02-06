import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartProductType } from "../../types/types";

export type InitialStateType = {
  products: Array<CartProductType>;
  shipping: number;
  isFetching: boolean;
  addingInProgress: Array<number>;
};

const initialState: InitialStateType = {
  products: [],
  shipping: 7,
  isFetching: false,
  addingInProgress: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProductType>) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product: CartProductType) => product.id !== action.payload
      );
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setProducts: (state, action: PayloadAction<Array<CartProductType>>) => {
      state.products = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
    },
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product: CartProductType) => {
        if (product.id === action.payload) {
          return {
            ...product,
            totalProductPrice: product.totalProductPrice + product.price,
            quantity: product.quantity + 1,
          };
        };
        return product;
      })
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product: CartProductType) => {
        if (
          product.id === action.payload &&
          product.totalProductPrice > product.price
        ) {
          return {
            ...product,
            totalProductPrice: product.totalProductPrice - product.price,
            quantity: product.quantity - 1,
          };
        };
        return product;
      })
    },
    setAddingInProgress: (state, action: PayloadAction<{ isFetching: boolean, productId: number}>) => {
      const { isFetching, productId } = action.payload
      state.addingInProgress = isFetching
        ? [...state.addingInProgress, productId]
        : state.addingInProgress.filter((id) => id !== productId)
    },
  },
})

export const {
  addProductToCart,
  removeProductFromCart,
  setIsFetching,
  setProducts,
  clearProducts,
  increaseProductQuantity,
  decreaseProductQuantity,
  setAddingInProgress,
} = cartSlice.actions;

export default cartSlice.reducer;
