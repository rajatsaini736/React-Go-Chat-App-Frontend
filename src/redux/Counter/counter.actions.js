import { ADD_ONE, MINUS_ONE } from "./counter.types";

export const AddOne = () => {
    return {
        type: ADD_ONE,
        info: 'increment by one'
    }
}

export const MinusOne = () => {
    return {
        type: MINUS_ONE,
        info: 'decrement by one'
    }
}