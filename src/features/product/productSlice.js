/*
 * Author: Amarjit Pheiroijam
 * OS : Windows 11 Home Single Language
 * Editor : Visual Studio Code v1.103.0
 * Created Date: Friday, August 8th 2025, 4:41:31 am
 */

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Immer lets us mutate directly
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productSlice.reducer;
