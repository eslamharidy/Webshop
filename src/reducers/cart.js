// import { SET_ITEMS } from "../actions/Cart";

export default (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return [...state, action.payload]
        default:
            return state;
    }
};