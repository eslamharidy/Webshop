import React from "react";

export default function ProductPage(props) {
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
          console.log("koko", imageurl);

          return (
            <div>
              <p>{product.title}</p>
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
            </div>
          );
        })}
    </div>
  );
}
