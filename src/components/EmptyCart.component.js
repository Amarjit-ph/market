import React from 'react';
import emptySvg from "../assets/empty-cart.svg";
const EmptyCart = () => {
    return (
        <React.Fragment>
            <img class="h-25 w-25" src={emptySvg} />
            <h3 class="text-xl mt-4 font-medium text-gray-700">Its lonely here,</h3>
            <h3 class="text-md font-medium text-gray-700">Please add some product.</h3>
        </React.Fragment>
    );
}
export default EmptyCart;