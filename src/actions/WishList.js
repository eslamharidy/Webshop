export const SET_ITEMS_WISHLIST = "SET_ITEMS_WISHLIST";
export const REMOVE_WISHLIST_ITEMS = "REMOVE_WISHLIST_ITEMS";

export const setItemsWishList = items => dispatch => {
  console.log(items, "wishlist");

  const action = {
    type: SET_ITEMS_WISHLIST,
    payload: items
  };

  dispatch(action);
};

export const removeItems = id => dispatch => {

  const action = {
    type: REMOVE_WISHLIST_ITEMS,
    payload: id
  };

  dispatch(action);
};
