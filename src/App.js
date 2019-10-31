import React from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import { Route, BrowserRouter } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import ProductPageContainer from "./components/ProductPageContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/cart" exact component={CartContainer} />
        <Route path="/" exact component={ProductListContainer} />
        <Route path="/product/:id" exact component={ProductPageContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
