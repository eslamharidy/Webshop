import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from "../actions/Cart";
import Cart from './Cart';

class CartContainer extends Component {
    componentDidMount() {
        // const albumId = this.props.match.params.id;
        const items = this.props.getItems();
        console.log('items', items);

        if (this.props.items.length < 1) this.props.getItems();
        if (!this.props.items) return 'Loading...';
    }

    render() {

        if (!this.props.items) {
            return <p>Loading...</p>;
        } else {
            return <Cart
                items={this.props.items}
            />;
        }
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.cart
        // album: state.albums.find(
        //     album => album.id === parseInt(ownProps.match.params.id)
        // )
    }
}

export default connect(mapStateToProps, { getItems })(CartContainer);

