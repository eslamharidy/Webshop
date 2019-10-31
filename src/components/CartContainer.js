import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";


class CartContainer extends Component {
  render() {
    if (!this.props.items) {
      return <p>Loading...</p>;
    } else {
      return <Cart items={this.props.items} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart
  };
};

export default connect(mapStateToProps)(CartContainer);
