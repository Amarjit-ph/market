/*
 * Author: Amarjit Pheiroijam
 * OS : Windows 11 Home Single Language
 * Editor : Visual Studio Code v1.103.0
 * Created Date: Friday, August 8th 2025, 4:35:42 am
 */

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import selectedproductReducer from '../features/product/selectedProductSlice'
import cartReducer from '../features/cart/cartSlice'

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedproductReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer
})