import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../redux/actions/cartsAction';
const CartItemsList = ({ cartItems }) => {
    const dispatch = useDispatch();
    const clearCart = () => {
        dispatch(clearCartAction());
    }
    return (
        <React.Fragment>
            {cartItems.map((product, i) => {
                return (
                    <div class="flex justify-between mt-6" key={i}>
                        <div class="flex">
                            <img class=" max-h-14 max-w-15 min-w-15 object-cover rounded" src={product.image} alt="" />
                            <div class="mx-3">
                                <h3 class="text-sm text-gray-600">{product.title}</h3>
                                <span class="text-sm text-gray-700">Qty : 1</span>
                                <span class="text-gray-600 ml-4 text-md">₹{[(product.price * 75).toFixed(2)]}</span>
                                {/* <div class="flex items-center mt-2">
                                    <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <span class="text-gray-600">₹{[(product.price * 75).toFixed(2)]}</span>
                                    <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div class="mt-8">
                <button onClick={clearCart} class="flex items-center px-3 py-1 mb-3 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Clear All</span>
                </button>
                <form class="flex items-center justify-center">
                    <input class="form-input w-48" type="text" placeholder="Add promocode" />
                    <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Apply</span>
                    </button>
                </form>

            </div>
            <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Checkout</span>
                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>


        </React.Fragment>
    )
}
export default CartItemsList;