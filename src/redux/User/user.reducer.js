import { SIGN_UP, SIGN_OUT, LOGIN_LATER } from "./user.types";

const initialState = {
    loginLater: false,
    isLogin: false,
    userName : ''
}

let userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                userName: action.payload,
                isLogin: true
            }
        case SIGN_OUT:
            return {
                ...state,
                userName: '',
                isLogin: false
            }
        case LOGIN_LATER:
            return {
                ...state,
                loginLater: true
            }
        default:
            return state
    }
}

export default userReducer;