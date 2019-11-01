import React from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import { Route, BrowserRouter } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import ProductPageContainer from "./components/ProductPageContainer";
import CheckoutContainer from "./components/CheckoutContainer";
import WishListContainer from "./components/WishListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route path="/cart" exact component={CartContainer} />
        <Route path="/wishlist" exact component={WishListContainer} />
        <Route path="/" exact component={ProductListContainer} />
        <Route path="/product/:id" exact component={ProductPageContainer} />
        <Route path="/checkout" exact component={CheckoutContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
