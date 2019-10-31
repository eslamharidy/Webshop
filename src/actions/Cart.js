export const SET_ITEMS = "SET_ITEMS";
export const REMOVE_ITEMS = "REMOVE_ITEMS";

export const setItems = items => dispatch => {
  console.log(items, "clicked");

  const action = {
    type: SET_ITEMS,
    payload: items
  };

  dispatch(action);
};

export const removeItems = id => dispatch => {
  console.log(id, "clicked");

  const action = {
    type: REMOVE_ITEMS,
    payload: id
  };

  dispatch(action);
};
