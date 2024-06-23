import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../slices/wishList";
import cartReducer from "../slices/cartSlice";
import { loadState, saveState } from "../localStorage";

const preloadedState = {
  wishlist: loadState(),
};

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().wishlist);
});

export default store;
