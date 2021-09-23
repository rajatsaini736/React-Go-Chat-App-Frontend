import { ADD_ONE, MINUS_ONE } from "./counter.types";

const initialState = {
    count : 0
};

function counterReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ONE: 
            return {
                ...state, count: state.count + 1
            };
        case MINUS_ONE: 
            return {
                ...state, count: state.count - 1
            };
        default:
            return state;
    }
}

export default counterReducer;