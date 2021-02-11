import {authFailed, authSuccess} from "../actions/types";

const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authFailed:
            return {
                ...state,
                authError: 'Login Failed!'
            }

        case authSuccess:
            return {
                ...state,
                authError: null
            }

        default:
            return state;
    }
};

export default authReducer;