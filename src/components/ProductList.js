import React from "react";

export default function ProductList(props) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.products.map(product => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.name}</p>
            <button>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
