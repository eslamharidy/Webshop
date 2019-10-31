import React from "react";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                style={{ width: 300, height: 350 }}
                src={product.imageUrl}
                alt={product.title}
              />
              <p>{product.name}</p>
            </Link>
            <button>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
