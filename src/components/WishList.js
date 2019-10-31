import React from "react";
import { Link } from "react-router-dom";
import { removeItems } from "../actions/WishList";
import { connect } from "react-redux";
import { setItems } from '../actions/Cart';


export function WishList(props) {
  return (
    <div>
      <h1>WISH LIST</h1>
      <Link to="/">Continue Shopping</Link>
      {props.items.length > 0 ? (
        props.items.map(item => {
          return (
            <div style={{ display: "flex" }}>
              <p style={{ display: "flex", margin: "10px" }}>{item.name} </p>

              <img
                src={item.imageUrl}
                key={item.id}
                alt={item.name}
                style={{
                  maxWidth: 180,
                  borderRadius: 40,
                  display: "flex",
                  margin: "10px"
                }}
              />

              <p>{item.inStock > 0 ? "" : "this item is out of stock"}</p>
              <p>{item.price}</p>
              <button onClick={() => props.setItems(item)}>ADD TO CART</button>
              <button> <Link to="/checkout">Buy Now</Link></button>
              <button onClick={() => props.removeItems(item.id)}>Remove </button>
            </div>
          );
        })) : <p>Your WishList is empty</p>}
    </div>
  );
}
export default connect(
  null,
  { removeItems, setItems }
)(WishList);