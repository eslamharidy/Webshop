import React from "react";
import { setItems } from '../actions/Cart';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export function ProductPage(props) {
  console.log("product page ", props);
  const styles = {
    width: 100,
    height: 100
  };

  return (
    <div>
      {props.products &&
        props.products.map(product => {
          let imageurl = product.imageUrl;
          return (
            <div>
              <Link to={`/cart`}><img style={{ width: "25px", height: "20px" }} src="https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png"
                alt="cart"
              /></Link>

              <Link to="/">Continue Shopping</Link>
              <Link to="/checkout"> Checkout</Link>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <img
                onClick={() => {
                  imageurl = product.url1;
                  console.log("buttonclick", imageurl);
                }}
                style={{ width: 500, height: 500 }}
                src={imageurl}
                key={product.id}
                alt={product.title}
              />
              <div>
                <img style={styles} src={product.url1} alt={product.title} />
                <img style={styles} src={product.url2} alt={product.title} />
                <img style={styles} src={product.url3} alt={product.title} />
              </div>
              <p>{product.price}</p>
              <button onClick={() => props.setItems(product)}>ADD TO CART</button>
              <button onClick={() => alert('This button is not working since the webshop is only for learning purpose! ')}>Buy Now</button>

            </div>

          );
        })}
    </div>
  );
}


export default connect(null, { setItems })(ProductPage);