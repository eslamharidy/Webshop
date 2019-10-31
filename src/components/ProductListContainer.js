import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { getProducts } from "../actions/Products";
import { Link } from "react-router-dom";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const wishlisticon =
      "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItODYgMCA1MTEgNTExLjk5ODg4IiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0yODkuNDM3NSA3MC43MDcwMzF2LTU1LjcwNzAzMWMwLTQuNjQ4NDM4LTIuMTYwMTU2LTkuMDM5MDYyLTUuODQzNzUtMTEuODc4OTA2cy04LjQ3NjU2Mi0zLjgxMjUtMTIuOTc2NTYyLTIuNjI1bC0yNTguOTM3NSA2OC4xNDQ1MzFjLTEuNjcxODc2LjQzNzUtMy4xOTE0MDcgMS4xNTIzNDQtNC41NTA3ODIgMi4wNjY0MDZ6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Im0uNSAxMDAuNzA3MDMxdjM5Ni4yOTI5NjljMCA0LjQ2NDg0NCAyLjE3OTY4OCA4Ljk3NjU2MiA1LjcxODc1IDExLjc2OTUzMSAyLjU1NDY4OCAyLjAxNTYyNSA1Ljk4MDQ2OSAzLjIyNjU2MyA5LjI4MTI1IDMuMjMwNDY5aDMwOS40NDkyMTljOC4yODEyNSAwIDE1LTYuNzE4NzUgMTUtMTV2LTM4MS4yOTI5NjljMC04LjI4NTE1Ni02LjcxODc1LTE1LTE1LTE1em0xMjguNjkxNDA2IDY5LjE3MTg3NWMyMi41NzQyMTkgMCA0MC44ODI4MTMgMTguMTY3OTY5IDQxLjAzMTI1IDQwLjYzNjcxOS4wODk4NDQtMjIuNTE1NjI1IDE4LjQyMTg3NS00MC43NDIxODcgNDEuMDMxMjUtNDAuNzQyMTg3IDIyLjY2MDE1NiAwIDQxLjAzMTI1IDE4LjMxNjQwNiA0MS4wMzUxNTYgNDAuOTEwMTU2IDAgMTMuMDMxMjUtNi45MDIzNDMgMjIuNjkxNDA2LTE1LjY0MDYyNCAzMi4xMjEwOTRoLjAxMTcxOGwtNjYuNDQxNDA2IDcwLjQxNDA2Mi02Ni4zNzEwOTQtNzAuMjczNDM4Yy03LjMzOTg0NC04Ljg2MzI4MS0xNS42ODc1LTE5LjEwNTQ2OC0xNS42ODc1LTMyLjE1NjI1IDAtMjIuNTkzNzUgMTguMzcxMDk0LTQwLjkxMDE1NiA0MS4wMzEyNS00MC45MTAxNTZ6bTEwMC4yMDcwMzIgMjExLjk4NDM3NWMwIDguMjg1MTU3LTYuNzE0ODQ0IDE1LTE1IDE1aC04OC4zNTE1NjNjLTguMjgxMjUgMC0xNS02LjcxNDg0My0xNS0xNSAwLTguMjg1MTU2IDYuNzE4NzUtMTUgMTUtMTVoODguMzUxNTYzYzguMjg1MTU2IDAgMTUgNi43MTQ4NDQgMTUgMTV6bS0xMjkuMjQ2MDk0IDMxLjU2MjVoMTQwLjE0MDYyNWM4LjI4NTE1NiAwIDE1IDYuNzE4NzUgMTUgMTUgMCA4LjI4NTE1Ny02LjcxNDg0NCAxNS0xNSAxNWgtMTQwLjE0MDYyNWMtOC4yODEyNSAwLTE1LTYuNzE0ODQzLTE1LTE1IDAtOC4yODEyNSA2LjcxODc1LTE1IDE1LTE1em0wIDAiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4K";
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Link to={`/cart`}>
            <img
              style={{ width: "25px", height: "20px" }}
              src="https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png"
              alt="cart"
            />
          </Link>
          <Link to={`/wishlist`}>
            <img
              style={{ width: "25px", height: "20px" }}
              src={wishlisticon}
              alt="wishlist"
            />
          </Link>
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
