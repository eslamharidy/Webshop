
import React from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./components/Homepage";
import ProductListContainer from "./components/ProductListContainer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/cart" exact component={CartContainer} />
        <Route path="/" exact component={ProductListContainer} />

      </div>
    </BrowserRouter>
  );
}

export default App;
