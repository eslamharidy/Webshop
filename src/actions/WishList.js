export const SET_ITEMS_WISHLIST = "SET_ITEMS_WISHLIST";

export const setItemsWishList = items => dispatch => {
  console.log(items, "wishlist");

  const action = {
    type: SET_ITEMS_WISHLIST,
    payload: items
  };

  dispatch(action);
};
