import React, { Component } from "react";
import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { getProductById } from "../actions/Products";

class ProductPageContainer extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    console.log("hi from comp id", this.props.match.params.id);
    console.log("hi from pp", this.props.products);
    this.props.getProductById(productId);
  }

  render() {
    console.log("hi from comp id", this.props.match.params.id);

    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return <ProductPage products={this.props.products} />;
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
  { getProductById }
)(ProductPageContainer);
