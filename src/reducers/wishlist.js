export default (state = [], action) => {
  switch (action.type) {
    case "SET_ITEMS_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_WISHLIST_ITEMS":
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};
