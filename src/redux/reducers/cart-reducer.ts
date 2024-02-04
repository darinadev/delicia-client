import { CartProductType } from "../../types/types";
import { CartActionTypes } from "../action-types";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_IS_FETCHING,
  SET_PRODUCTS,
  CLEAR_PRODUCTS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_ADDING_IN_PROGRESS,
} from "../constants";

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

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product: CartProductType) => product.id !== action.productId
        ),
      };
    case SET_IS_FETCHING:
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: CartProductType) => {
          if (product.id === action.productId) {
            return {
              ...product,
              totalProductPrice: product.totalProductPrice + product.price,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: CartProductType) => {
          if (
            product.id === action.productId &&
            product.totalProductPrice > product.price
          ) {
            return {
              ...product,
              totalProductPrice: product.totalProductPrice - product.price,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };
    case SET_ADDING_IN_PROGRESS:
      return {
        ...state,
        addingInProgress: action.isFetching
          ? [...state.addingInProgress, action.productId]
          : state.addingInProgress.filter((id) => id !== action.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;
