import {loginFailed, loginSuccess, signedOutSuccess, signUpFailed, signUpSuccess} from "../actions/types";

const initState = {};

function authReducer(state = initState, action) {
    switch (action.type) {
        case loginFailed:
            return {
                ...state,
                authError: action.err.message
            };

        case loginSuccess:
            return {
                ...state,
                authError: null
            };

        case signUpSuccess:
            return {
                ...state,
                authError: null
            };

        case signUpFailed:
            return {
                ...state,
                authError: action.err.message
            };

        case signedOutSuccess:
        default:
            return state;
    }
}

export default authReducer;