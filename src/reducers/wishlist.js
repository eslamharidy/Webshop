export default (state = [], action) => {
  console.log("set item to wishlist", action);
  switch (action.type) {
    case "SET_ITEMS_WISHLIST":
      return [...state, action.payload];
    default:
      return state;
  }
};
