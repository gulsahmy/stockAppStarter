import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },


    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false
      state[path] = stockData
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  getFirmsSuccess,
  getSalesSuccess,
  getStockSuccess,
  fetchFail,
} = stockSlice.actions

export default stockSlice.reducer
