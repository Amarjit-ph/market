/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 13th 2022, 1:54:20 am
 * Year 2022
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsContainer from "./pages/Products.container";
import ProductDetailsContainer from "./pages/ProductDetails.container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductsContainer} />
          <Route path="/product/:productId" component={ProductDetailsContainer} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
