import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "./reducers/menu-reducer";
import cartReducer from "./reducers/cart-reducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
