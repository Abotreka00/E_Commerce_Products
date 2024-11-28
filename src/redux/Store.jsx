import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cart";
import addressSlice from "./changeAddress";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    mangeAddress: addressSlice,
  },
});

export default store;
