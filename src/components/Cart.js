import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Cart.css";
import { removeItems } from "../actions/Cart";

function Cart(props) {

    return (
        <div className="cart-wrapper">
            <h1>Your Shopping cart</h1>
            <Link to="/">Continue Shopping</Link>

            {props.items.length > 0 ? (
                props.items.map(item => {
                    return (
                        <div className="item-in-cart-container">
                            <p>{item.name} </p>

                            <img
                                src={item.imageUrl}
                                key={item.id}
                                alt={item.name}
                               />

                            <p>{item.inStock > 0 ? '' : 'this item is out of stock'}</p>
                            <p>{item.price} €</p>
                            <div className="cart-remove-button">
                <button onClick={() => props.removeItems(item.id)}>
                  REMOVE FROM CART
                </button>
              </div>
                        </div>
                    );
                })
            ) : (
                    <p>"NO ITEMS IN THE CART"</p>
                )}
            <button> <Link to="/checkout"> Checkout</Link></button>
        </div>
    );
}
export default connect(
  null,
  { removeItems }
)(Cart);
