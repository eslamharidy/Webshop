import React from "react";

import { setItems } from "../actions/Cart";
import { setItemsWishList } from "../actions/WishList";
import { connect } from "react-redux";

import "./ProductList.css";

import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <div>
      <ul className="product-list-container">
        {props.products.map(product => (
          <li class="product-list" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.title} />
              <p>{product.name}</p>
            </Link>
<div className="buttons">
            <button onClick={() => props.setItems(product)}> <Link to="/checkout">Buy Now</Link></button>
              <button onClick={() => props.setItems(product)}>
                ADD TO CART
              </button>
              <button onClick={() => props.setItemsWishList(product)}>
                ADD TO WISHLIST
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
export default connect(
  null,
  { setItems, setItemsWishList }
)(ProductList);
