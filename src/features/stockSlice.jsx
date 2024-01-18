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
      state.error = false;
    },
    getStocksSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.apiData;
      state.error = false;
    },
    getPurchasesTableSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.purchases = payload[1];
      state.brands = payload[2];
      state.firms = payload[3];
      state.error = false;
    },
    getSalesTableSuccess: (state, { payload }) => {
      state.loading = false;
      state.sales = payload[0];
      state.brands = payload[1];
      state.products = payload[2];
      state.error = false;
    },
    getProductTableSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getStocksSuccess,
  fetchStart,
  fetchFail,
  getPurchasesTableSuccess,
  getSalesTableSuccess,
  getProductTableSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
