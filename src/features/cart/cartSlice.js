/*
 * Author: Amarjit Pheiroijam
 * OS : Windows 11 Home Single Language
 * Editor : Visual Studio Code v1.103.0
 * Created Date: Friday, August 8th 2025, 5:02:32 am
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    isCartOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        openCart: (state) => {
            state.isCartOpen = true;
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },
    },
});

export const { addToCart, removeFromCart, clearCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
