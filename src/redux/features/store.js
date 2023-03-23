import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import getCartDataSlice from "./fatchCartData";
// import PostReducer from "../features/getPostSlice";
const store = configureStore({
  reducer: {
    // getpost: PostReducer,
    cart: cartSlice,
    cartData: getCartDataSlice,
  },
});

export default store;
