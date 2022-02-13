/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 12th 2022, 10:42:42 pm
 * Year 2022
 */
import { ActionTypes } from "../constants/action-types";
export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, payload];
        case ActionTypes.REMOVE_FROM_CART:
            return [...state.cart.products.filter(element => element !== payload)];
        case ActionTypes.CLEAR_CART:
            return [];
        default:
            return state;
    }
};