import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../slices/wishList";
import cartReducer from "../slices/cartSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;