/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 12th 2022, 10:42:42 pm
 * Year 2022
 */
import { ActionTypes } from "../constants/action-types";
const initialCartState = {
    cart: [],
    isCartOpen: false,
};
export const cartReducer = (state = initialCartState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload] };
        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cart: [...state.cart.filter(element => element !== payload)] };
        case ActionTypes.CLEAR_CART:
            return { ...state, cart: [] };
        case ActionTypes.OPEN_CART:
            return { ...state, isCartOpen: true };
        case ActionTypes.CLOSE_CART:
            return { ...state, isCartOpen: false };
        default:
            return state;
    }
};