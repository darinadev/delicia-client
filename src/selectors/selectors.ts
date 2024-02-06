import { createSelector } from 'reselect';
import { RootState } from "../redux/store";
import { CartProductType, MenuType } from "../types/types";

export const getMenuCategories = createSelector(
  [(state: RootState) => state.menu],
  menu => {
    return menu.menu.map((item: MenuType) => item.category)
  }
);

export const getCurrentCategory = (state: RootState) => {
  return state.menu.currentCategory;
};

export const getMenuProducts = (state: RootState) => {
  return state.menu.menu.find(
    (item: MenuType) => item.category === state.menu.currentCategory
  )?.items;
};

export const getCartProducts = (state: RootState) => {
  return state.cart.products;
};

export const getAddingInProgress = (state: RootState) => {
  return state.cart.addingInProgress;
};

export const getSubtotalPrice = (state: RootState) => {
  let subtotalPrice = 0;
  state.cart.products.forEach(
    (product: CartProductType) =>
      (subtotalPrice = subtotalPrice + product.totalProductPrice)
  );
  return subtotalPrice;
};

export const getShipping = (state: RootState) => {
  return state.cart.shipping;
};
