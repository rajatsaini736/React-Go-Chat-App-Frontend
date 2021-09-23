import { SIGN_UP, SIGN_OUT, LOGIN_LATER } from "./user.types";

export const SignUp = (payload) => {
    return {
        type: SIGN_UP,
        payload
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT,
        info: 'Signing Out'
    }
}

export const LoginLater = () => {
    return {
        type: LOGIN_LATER,
        info: 'Login Later'
    }
}