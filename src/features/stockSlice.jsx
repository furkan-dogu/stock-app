import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  error: false,
  loading: false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    firmsSuccess: (state, {payload}) => {
      state.loading = false
      state.firms = payload.data
    },
  },
})

export const {firmsSuccess} = stockSlice.actions

export default stockSlice.reducer