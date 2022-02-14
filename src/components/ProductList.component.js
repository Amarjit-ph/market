/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 13th 2022, 1:54:20 am
 * Year 2022
 */
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from './Card.component';
import starRating from '../common/star-rating-helper';
const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (products[0]) {
            setIsLoading(false);
        }
    }, [products]);
    return (
        <div class="container mx-auto px-6 md:px-48 pb-6">
            <div class="mt-6">
                <h3 class="text-gray-600 text-3xl font-medium">All Categories</h3>
                <span class="mt-3 text-md text-gray-500">2000+ Popular products based on sales.</span>
                {isLoading ?
                    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    :
                    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {products.map((product, i) => {
                            return (
                                < div class="w-full max-w-md mx-auto rounded-md shadow-md overflow-hidden p-2" key={i}>
                                    <Link to={`/product/${product.id}`}>
                                        <div class="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url(${product.image})` }} >
                                            {/* <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </button> */}
                                        </div>
                                        <div class="px-5 py-3">
                                            <h3 class="text-gray-700 uppercase mb-1">{product.title}</h3>
                                            <h3 class="text-gray-500 mb-2">{product.category}</h3>
                                            {starRating(product.rating.rate, product)}
                                            <span class="text-red-500 font-bold text-lg">₹{[(product.price * 75).toFixed(2)]}</span>
                                            <h3 class="text-grey-500 text-sm">Save Extra with No cost EMI</h3>
                                            <h3 class="text-black-8000 mb-2 text-sm">Free Delivery by <b>Delhivery</b></h3>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                        }
                    </div>
                }
            </div >
        </div>
    );
}
export default ProductList;

