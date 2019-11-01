import React from "react";
import { setItems } from "../actions/Cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setItemsWishList } from "../actions/WishList";
import "./ProductPage.css";

export function ProductPage(props) {
  return (
    <div>
      {props.products &&
        props.products.map(product => {
          return (
            <div>
              <div className="product-container">
                <div className="imgs-container">
                  <img
                    style={{ width: 500, height: 500 }}
                    src={product.imageUrl}
                    key={product.id}
                    alt={product.title}
                  />
                  <div className="small-imgs">
                    <img
                      style={styles}
                      src={product.url1}
                      alt={product.title}
                    />
                    <img
                      style={styles}
                      src={product.url2}
                      alt={product.title}
                    />
                    <img
                      style={styles}
                      src={product.url3}
                      alt={product.title}
                    />
                  </div>
                  <p>{product.price} €</p>
                </div>
              </div>
              <div className="buttons-description-container">
                <p className="product-title">{product.name}</p>
                <p className="product-des">{product.description}</p>
                <div className="buttons-container">
                  <button
                    className="product-button"
                    onClick={() => props.setItems(product)}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="product-button"
                    onClick={() => props.setItems(product)}
                  >
                    <Link to="/checkout">Buy Now</Link>
                  </button>
                  <button
                    className="product-button"
                    onClick={() => props.setItemsWishList(product)}
                  >
                    ADD TO WISHLIST
                  </button>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <h1>Continue Shopping</h1>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default connect(
  null,
  { setItems, setItemsWishList }
)(ProductPage);
