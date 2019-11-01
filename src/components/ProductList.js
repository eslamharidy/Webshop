import React from "react";

import { setItems } from "../actions/Cart";
import { setItemsWishList } from "../actions/WishList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <div className="product-list-container">
      <ul style={{ listStyle: "none" }}>
        {props.products.map(product => (
          <li class="product-list" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                style={{ width: 300, height: 350 }}
                src={product.imageUrl}
                alt={product.title}
              />
              <p>{product.name}</p>
              <p>{product.price} €</p>
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
