import menuReducer from "./reducers/menu-reducer";
import cartReducer from "./reducers/cart-reducer";
import { thunk, ThunkAction } from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, Action } from "redux";

let rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducer, applyMiddleware(thunk) as {});

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

export default store;

//@ts-ignore
window.store = store;
