/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 10th 2022, 1:54:20 am
 * Year 2022
 */
import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";
import { addToCartAction } from "../redux/actions/cartsAction";
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import starRating from '../common/star-rating-helper';


const ProductDetailsContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { image, title, price, category, description } = product;
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <React.Fragment>
      <Header />
      {Object.keys(product).length === 0 ? (
        <div class="flex mt-96 sm:mt-72  justify-center w-full h-full">
          <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg fill='none' class="w-14 h-14 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
              <path clip-rule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fill-rule='evenodd' />
            </svg>
            Loading...
          </div>
        </div>
      ) : (
        <main class="pt-12 sm:px-12 pb-32">
          <div class="container mx-auto px-6">
            <div class="md:flex md:items-center">
              <div class="w-full h-64 md:w-1/2 lg:h-96">
                <img class="h-full w-full rounded-md object-contain max-w-lg mx-auto" src={image} alt="Alternative Image" />
              </div>
              <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h1 class="text-gray-700 uppercase text-2xl">{title}</h1>
                <h2>
                  <a className="">₹{[(product.price * 75).toFixed(2)]}</a>
                </h2>
                <p className="mt-4">{description}</p>
                <div class="star mt-2">{product.rating === undefined ? <></> : starRating(product.rating.rate, product)}</div>

                <h1 class="text-grey-500 text-lg mt-3">Save Extra with No cost EMI</h1>
                <h1 class="text-black-8000 mb-2 text-gl">Free Delivery by <b>Delhivery</b></h1>

                <div class="flex items-center mt-6" onClick={() => { addToCart(product) }}>
                  <button class="px-12 py-2 bg-indigo-600 text-white text-md font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Add to Cart</button>
                  <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <div className="bottom-0 fixed w-screen">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ProductDetailsContainer;








