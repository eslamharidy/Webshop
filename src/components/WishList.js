import React from "react";
import { Link } from "react-router-dom";
import { removeItems } from "../actions/WishList";
import { connect } from "react-redux";
import { setItems } from "../actions/Cart";
import "./WishList.css";

export function WishList(props) {
  return (
    <div className="wishlist-wrapper">
      <h1>WISH LIST</h1>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">Continue Shopping</Link>
      {props.items.length > 0 ? (
        props.items.map(item => {
          return (
            <div className="item-in-wishlist-container">
              <p>{item.name} </p>

              <img src={item.imageUrl} key={item.id} alt={item.name} />

              <p>{item.inStock > 0 ? "" : "this item is out of stock"}</p>
              <p>{item.price} €</p>

              <div className="wishlist-remove-button">
                <button onClick={() => props.setItems(item)}>
                  ADD TO CART
                </button>
                <button onClick={() => props.setItems(item)}>
                  {" "}
                  <Link style={{ textDecoration: "none", color: "black" }} to="/checkout">Buy Now</Link>
                </button>
                <button onClick={() => props.removeItems(item.id)}>
                  Remove{" "}
                </button>
              </div>

            </div>
          );
        })
      ) : (
          <p>Your WishList is empty</p>
        )}
    </div>
  );
}
export default connect(
  null,
  { removeItems, setItems }
)(WishList);
