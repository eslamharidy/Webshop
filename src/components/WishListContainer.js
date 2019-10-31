import React, { Component } from "react";
import { connect } from "react-redux";

import WishList from "./WishList";

class WishListContainer extends Component {
  render() {
    if (!this.props.items) {
      return <p>Loading...</p>;
    } else {
      return <WishList items={this.props.items} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.wishlist
  };
};

export default connect(mapStateToProps)(WishListContainer);
