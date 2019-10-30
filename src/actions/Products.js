export const GET_PRODUCTS = "GET_PRODUCTS";

export function setProduct(products) {
  console.log("hi from pro action", products);
  return {
    type: GET_PRODUCTS,
    payload: products
  };
}

export function getProducts() {
  return function(dispatch) {
    fetch(
      "https://my-json-server.typicode.com/mtabanja/webshop/blob/master/Products"
    )
      .then(res => res.json())
      .then(data => {
        console.log("hi from data", data);
        dispatch(setProduct(data));
      });
  };
}
