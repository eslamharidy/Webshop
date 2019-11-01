export const SET_ITEMS = "SET_ITEMS";
export const REMOVE_ITEMS = "REMOVE_ITEMS";

export const setItems = items => dispatch => {

    const action = {
        type: SET_ITEMS,
        payload: items
    };

    dispatch(action);
};

export const removeItems = id => dispatch => {

    const action = {
        type: REMOVE_ITEMS,
        payload: id
    };

    dispatch(action);
};
