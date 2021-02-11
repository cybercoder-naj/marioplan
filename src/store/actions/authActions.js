import {authFailed, authSuccess, signedOutSuccess} from "./types";

export const signIn = credentials => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: authSuccess
            });
        }).catch(err => {
            dispatch({type: authFailed, err})
        });
    };
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: signedOutSuccess})
        });
    }
};