import React from 'react';
import { Link } from "react-router-dom";


export default function Cart(props) {
    return (
        <div>
            <h1>Your Shopping cart</h1>
            {props.items.map(item => {
                return (
                    <div style={{ display: "flex" }}>
                        <p style={{ display: "flex", margin: '10px' }}>{item.name} </p>
                        <img
                            src={item.imageUrl}
                            key={item.id}
                            alt={item.name}
                            style={{ maxWidth: 180, borderRadius: 40, display: "flex", margin: '10px' }} />
                        <p>{item.price}</p>
                        <p>{item.inStock} in stock or not </p>
                    </div>)
            })}
            <Link to="/">Continue Shopping</Link>
        </div>)
};