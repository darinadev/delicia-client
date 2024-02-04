import { SET_CURRENT_CATEGORY } from "../constants";

export const setCurrentCategory = (currentCategory: string) => ({
  type: SET_CURRENT_CATEGORY,
  currentCategory,
});
