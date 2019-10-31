

import React from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import ProductListContainer from "./components/ProductListContainer";
import ProductPageContainer from "./components/ProductPageContainer";
import CheckoutContainer from './components/CheckoutContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/cart" exact component={CartContainer} />
        <Route path="/" exact component={ProductListContainer} />
        <Route path="/product/:id" exact component={ProductPageContainer} />
        <Route path="/checkout" exact component={CheckoutContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
