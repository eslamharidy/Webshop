import React from "react";
import { setItems } from '../actions/Cart';
import { connect } from 'react-redux';




function ProductList(props) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.products.map(product => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.name}</p>
            <button onClick={() => props.setItems(product)}>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default connect(null, { setItems })(ProductList);