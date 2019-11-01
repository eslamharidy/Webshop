export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";

export function setProducts(products) {
  return {
    type: GET_PRODUCTS,
    payload: products
  };
}

export function setProductId(products) {
  return {
    type: GET_PRODUCT_ID,
    payload: products
  };
}

export function getProducts() {
  return function (dispatch) {
    fetch("https://my-json-server.typicode.com/mtabanja/api/products")
      .then(res => res.json())
      .then(data => {
        dispatch(setProducts(data));
        console.log("Hi FROM data", data);
      });
  };
}

export function getProductById(productId) {
  return function (dispatch) {
    fetch(
      `https://my-json-server.typicode.com/mtabanja/api/products?id=${productId}`
    )
      .then(res => res.json())
      .then(data => {
        dispatch(setProductId(data));
      });
  };
}
