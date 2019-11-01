import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getItems } from "../actions/Cart";
import Checkout from './Checkout';

class CheckoutContainer extends Component {


    render() {
        if (!this.props.items) {
            return <p>Loading...</p>;
        } else {
            return <Checkout items={this.props.items} />
        }
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

export default connect(mapStateToProps)(CheckoutContainer);

