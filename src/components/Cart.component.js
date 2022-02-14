import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from './EmptyCart.component';
import CartItemsList from './CartItemsList.component';
import { closeCartAction } from '../redux/actions/cartsAction';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const closeCart = () => {
        dispatch(closeCartAction());
    }
    useEffect(() => {
        getCartStatusClass();
    }, [isCartOpen])
    function getCartStatusClass() {
        if (isCartOpen) {
            return "translate-x-0 ease-out fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300";
        } else {
            return "translate-x-full ease-in fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300";
        }
    };
    return (
        <div class={getCartStatusClass()}>
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
                <button class="text-gray-600 focus:outline-none" onClick={closeCart}>
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <hr class="my-3" />
            {cartItems.length === 0 ? <EmptyCart /> : <CartItemsList cartItems={cartItems} />}
        </div>
    );
}
export default Cart;