import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { getProducts } from "../actions/Products";
import { Link } from "react-router-dom";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
    // console.log("hooooo", this.props);
  }

  render() {
    // console.log("hiiiiiii", this.props);
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Link to={`/cart`}><img style={{ width: "25px", height: "20px" }} src="https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png"
            alt="cart"
          /></Link>
          <ProductList products={this.props.products} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductListContainer);
