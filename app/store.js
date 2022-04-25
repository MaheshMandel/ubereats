import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import orderCompleteReducer from '../features/orderComplete/orderCompleteSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderComplete: orderCompleteReducer,
  },
});
