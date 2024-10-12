import { createSlice } from "@reduxjs/toolkit";


// Initial state of product slice
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Piece of state of redux stote
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      console.log("set product to state after fetching")
      state.loading = false;
      state.data = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loading, success, failure } = productSlice.actions;

export default productSlice.reducer;
