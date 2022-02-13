/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 12th 2022, 11:52:10 am
 * Year 2022
 */
import { ActionTypes } from "../constants/action-types";
const initialProductState = {
  products: [],
};

export const productsReducer = (state = initialProductState, { type, payload }) => {
  console.log(type);
  //console.log("STATE PRODUCTS: ", state);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  console.log("STATE SELECTED PRODUCTS: ", state);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
