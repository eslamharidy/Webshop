import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { getProducts } from "../actions/Products";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
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
