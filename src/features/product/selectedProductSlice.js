/*
 * Author: Amarjit Pheiroijam
 * OS : Windows 11 Home Single Language
 * Editor : Visual Studio Code v1.103.0
 * Created Date: Friday, August 8th 2025, 4:45:22 am
 */

import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {},
  reducers: {
    selectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeSelectedProduct: () => {
      return {};
    },
  },
});

export const { selectedProduct, removeSelectedProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
