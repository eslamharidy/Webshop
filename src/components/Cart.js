import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setItems } from "../actions/Cart";
import { removeItems } from "../actions/Cart";

function Cart(props) {
  return (
    <div>
      <h1>Your Shopping cart</h1>
      <Link to="/">Continue Shopping</Link>
      {props.items.length > 0 ? (
        props.items.map(item => {
          console.log("check item state in cart", item);

          return (
            <div style={{ textAlign: "center" }}>
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
              <button onClick={() => props.removeItems(item.id)}>-</button>
              {/* {!item.id ? <p>{item.price} Euro</p> : ""} */}
              {/* {item ? (
              
            ) : (
              ""
            )} */}
            </div>
          );
        })
      ) : (
        <p>"NO ITEMS IN THE CART"</p>
      )}
    </div>
  );
}
export default connect(
  null,
  { setItems, removeItems }
)(Cart);
