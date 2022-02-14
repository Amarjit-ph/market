/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 13th 2022, 1:54:20 am
 * Year 2022
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart.component";
import { openCartAction } from "../redux/actions/cartsAction";
const Header = () => {
  const dispatch = useDispatch();
  const cartItemsNumber = useSelector((state) => state.cart.cart.length);
  const [hideNav, setHideNav] = useState(true);
  const toggleNav = () => {
    setHideNav(!hideNav);
  }
  const toggleCart = (status) => {
    dispatch(openCartAction(status));

  }
  return (
    <header className="mt-1" >
      <div class="container mx-auto px-6 md:px-48 py-3">
        <div class="flex items-center justify-between">

          <div class="hidden w-full text-gray-600 md:flex md:items-center">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
            </svg>
            <span class="mx-1 text-sm">IMPHAL</span>
          </div>

          <Link to={`/`}>
            <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Market
            </div>
          </Link>

          <div class="flex items-center justify-end w-full">
            <button class="text-gray-600 focus:outline-none mr-2 sm:mx-0" onClick={toggleCart}>
              <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
            {cartItemsNumber === 0 ? <></> : <>
              <span className="text-sm mr-1">{cartItemsNumber}</span>
              <span class="inline-block w-3 h-3 bg-red-600 rounded-full mr-3"></span>
            </>}
            <div class="flex sm:hidden" onClick={() => toggleNav(true)}>
              <button type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>

          </div>
        </div>

        <nav class="hidden sm:visible sm:flex sm:justify-center sm:items-center mt-4">
          <div class="flex flex-col sm:flex-row">
            <Link to={`/`}>
              <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
            </Link>
            <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
            <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
            <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
            <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
          </div>
        </nav>

        {hideNav ?
          <></> :
          <nav class=" sm:hidden sm:flex sm:justify-center sm:items-center mt-4">
            <div class="flex flex-col sm:flex-row">
              <Link to={`/`}>
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
              </Link>
              <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
              <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
              <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
              <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
            </div>
          </nav>}

        <Cart />


      </div >
    </header >
  );
};
export default Header;
