import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  error: false,
  loading: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getStocksSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.apiData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getStocksSuccess, fetchStart, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
