import { AppStateType } from "../redux/store";
import { CartProductType } from "../types/types";

export const getMenuCategories = (state: AppStateType) => {
  return state.menu.menu.map((item: any) => item.category);
};

export const getCurrentCategory = (state: AppStateType) => {
  return state.menu.currentCategory;
};

export const getMenuProducts = (state: AppStateType) => {
  return state.menu.menu.find(
    (item: any) => item.category === state.menu.currentCategory
  )?.items;
};

export const getCartProducts = (state: AppStateType) => {
  return state.cart.products;
};

export const getAddingInProgress = (state: AppStateType) => {
  return state.cart.addingInProgress;
};

export const getSubtotalPrice = (state: AppStateType) => {
  let subtotalPrice = 0;
  state.cart.products.forEach(
    (product: CartProductType) =>
      (subtotalPrice = subtotalPrice + product.totalProductPrice)
  );
  return subtotalPrice;
};

export const getShipping = (state: AppStateType) => {
  return state.cart.shipping;
};
