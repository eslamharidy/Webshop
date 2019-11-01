import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-wrapper">
          <div className="navbar">
            <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
              <img className="logo" src={require("../logo.svg")} alt="logo" />

            </Link>
            <div className="icons-container">
              <Link style={{ textDecoration: "none", color: "black" }} to={`/cart`}>
                <img
                  className="cart-icon"
                  src={require("../cart.svg")}
                  alt="cart"
                />
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }} to={`/wishlist`}>
                <img
                  className="wishlist-icon"
                  src={require("../wishlist.svg")}
                  alt="wishlist"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

