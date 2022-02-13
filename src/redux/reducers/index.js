/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 12th 2022, 11:37:10 am
 * Year 2022
 */
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
});
export default reducers;
