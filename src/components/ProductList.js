import React from "react";

import { setItems } from '../actions/Cart';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";





function ProductList(props) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img style={{ width: 300, height: 350 }} src={product.imageUrl} alt={product.title} />
              <h1>{product.name}</h1>
              <p>{product.price}</p>

            </Link>
            <button onClick={() => props.setItems(product)}>ADD TO CART</button>


          </li>
        ))}
      </ul>
    </div>
  );
}
export default connect(null, { setItems })(ProductList);