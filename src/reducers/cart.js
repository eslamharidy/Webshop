export default (state = [], action) => {

    switch (action.type) {
        case "SET_ITEMS":
            return [...state, action.payload];
        case "REMOVE_ITEMS":
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
};
