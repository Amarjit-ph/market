/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 10th 2022, 1:56:20 am
 * Year 2022
 */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import axios from "axios";
import Header from '../components/Header.component';
import Banner from "../components/Banner.component";
import ProductList from "../components/ProductList.component";
import Search from "../components/Search.component";
import Footer from "../components/Footer.component";
import commonConstants from "../common/constants";
const ProductsContainer = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(commonConstants.ProductsURL)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Banner />
      <ProductList />
      <div className="bottom-0 w-screen">
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default ProductsContainer;
