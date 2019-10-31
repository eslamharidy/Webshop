import { GET_PRODUCTS } from "../actions/Products";
import { GET_PRODUCT_ID } from "../actions/Products";

export default (state = [], action) => {
  console.log("product reucer", action.payload, state);
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
    case GET_PRODUCT_ID:
      return action.payload;
    default:
      return state;
  }
};
