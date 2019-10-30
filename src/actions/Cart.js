
export const SET_ITEMS = "SET_ITEMS";

export function setItems(items) {
    return {
        type: SET_ITEMS,
        payload: items
    }

}

export function getItems() {
    return function (dispatch) {
        fetch(`https://my-json-server.typicode.com/mtabanja/webshop/blob/master/Products`)
            .then(res => res.json())
            .then(data => {
                // console.log("data", data);
                dispatch(setItems(data))
            });
    }
}