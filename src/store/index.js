import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./logic";

// creating redux store, internlly use createStore method of redux, simplifies process & reduce bolier plate code
const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
