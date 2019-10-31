
export const SET_ITEMS = "SET_ITEMS";


export const setItems = (items) => (dispatch) => {
    console.log(items, "clicked")

    const action = {
        type: SET_ITEMS,
        payload: items
    }

    dispatch(action)

}
// export function addItem(item) {
//     return {
//         type: ADD_ITEM,
//         payload: item
//     }

// }

// export function getItems() {
//     return function (dispatch) {
//         //         fetch(`https://my-json-server.typicode.com/mtabanja/webshop/blob/master/Products`)
//         //             .then(res => res.json())
//         //             .then(data => {
//         // console.log("data", data);
//         dispatch(setItems())
//     };
// }
// }