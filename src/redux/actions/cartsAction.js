/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 12th 2022, 10:24:20 pm
 * Year 2022
 */
import { ActionTypes } from "../constants/action-types";
export const addToCartAction = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
};
export const removeFromCartAction = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product,
    };
};
export const clearCartAction = () => {
    return {
        type: ActionTypes.CLEAR_CART,
    };
};

export const openCartAction = () => {
    return {
        type: ActionTypes.OPEN_CART,
    }
}

export const closeCartAction = () => {
    return {
        type: ActionTypes.CLOSE_CART,
    }
}



