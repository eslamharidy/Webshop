import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeItems } from "../actions/Cart";

function Cart(props) {

    return (
        <div>
            <h1>Your Shopping cart</h1>
            <Link to="/">Continue Shopping</Link>

            {props.items.length > 0 ? (
                props.items.map(item => {
                    return (
                        <div style={{ display: "flex" }}>
                            <p style={{ display: "flex", margin: '10px' }}>{item.name} </p>

                            <img
                                src={item.imageUrl}
                                key={item.id}
                                alt={item.name}
                                style={{ maxWidth: 180, borderRadius: 40, display: "flex", margin: '10px' }} />

                            <p>{item.inStock > 0 ? '' : 'this item is out of stock'}</p>
                            <p>{item.price} €</p>
                            <button onClick={() => props.removeItems(item.id)}>Remove </button>
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
