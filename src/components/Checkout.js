import React from "react";
import { Link } from "react-router-dom";

export default function Checkout(props) {

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     if (this.state.title) {
    //         this.props.createAlbum(this.state.title)
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value })
    // }


    return (
        <div>
            <h1>Checkout</h1>
            <Link to="/">Continue Shopping</Link>
            {props.items.map(item => {
                return (
                    <div style={{ display: "flex" }}>
                        <p style={{ display: "flex", margin: '10px' }}>{item.name} </p>

                        <img
                            src={item.imageUrl}
                            key={item.id}
                            alt={item.name}
                            style={{ maxWidth: 180, borderRadius: 40, display: "flex", margin: '10px' }} />

                        <p>{item.inStock > 0 ? '' : 'this item is out of stock'}</p>
                        <p>{item.price}</p>
                    </div>)
            })}
            <form /*onSubmit={this.handleSubmit}*/>
                <label>
                    Title:
          <input type="text" name="title" /*value={this.state.title} onChange={this.handleChange}*/ />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>)
}

