import React from "react";

import { setItems } from "../actions/Cart";
import { setItemsWishList } from "../actions/WishList";
import { connect } from "react-redux";

import "./ProductList.css";

import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <div>

      <div><img className="coverpic"
        src="https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/ATVPDKIKX0DER/3d0c427a5e2a69ab6c8a944e45ad361a.w1500.h750._CR0%2C0%2C1500%2C750_SX750_SY375_.jpg"
        alt="cover" /></div>
      <div>
        <ul className="product-list-container">
          {props.products.map(product => (
            <li className="product-list" key={product.id}>
              <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.title} />
                <p>{product.name}</p>
                <p>{product.price} €</p>
              </Link>
              <div className="buttons">
                <button onClick={() => props.setItems(product)}> <Link style={{ textDecoration: "none" }} to="/checkout">Buy Now</Link></button>
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
    </div>
  );
}
export default connect(
  null,
  { setItems, setItemsWishList }
)(ProductList);
