import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItems } from "../actions/Cart";

export function Checkout(props) {
    const totalPrice = props.items.map(item => item.price).reduce((a, b) => a + b, 0);
    return (
        <div>
            <h1>Checkout</h1>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">Continue Shopping</Link>
            <Link style={{ textDecoration: "none", color: "black" }} to={`/cart`}>
                <img
                    style={{ width: "25px", height: "20px" }}
                    src="https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png"
                    alt="cart"
                /> Go to Cart
          </Link>
            {props.items.map(item => {
                return (
                    <div style={{ display: "flex" }}>
                        <p style={{ display: "flex", margin: '10px' }}>{item.name} </p>

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
                        <p>{item.price} €</p>
                        <button onClick={() => props.removeItems(item.id)}>Remove </button>
                    </div>
                );
            })}
            <div> Total price {totalPrice} €</div>
            <form>
                {" "}
                <p>Please fill the Shipping informations below :</p>
                <label>
                    First Name :
          <input type="text" name="title" />
                </label>
                <label>
                    Last Name :
          <input type="text" name="title" />
                </label>
                <label>
                    Street Name :
          <input type="text" name="title" />
                </label>
                <label>
                    House Number :
          <input type="text" name="title" />
                </label>
                <label>
                    Post code:
          <input type="text" name="title" />
                </label>
                <label>
                    City :
          <input type="text" name="title" />
                </label>
                <label>
                    Country :
          <input type="text" name="title" />
                </label>
                <button
                    type="submit"
                    onClick={() =>
                        alert(
                            "oops! no payment page available. but in realworld project we can add many more features as required! "
                        )
                    }
                >
                    to payment page
        </button>
            </form>
        </div>
    );
}

export default connect(
    null,
    { removeItems }
)(Checkout);
