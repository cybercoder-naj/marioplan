import {loginFailed, loginSuccess, signedOutSuccess, signUpFailed, signUpSuccess} from "./types";

export function signIn(credentials) {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: loginSuccess
            });
        }).catch(err => {
            dispatch({type: loginFailed, err})
        });
    };
}

export function signOut() {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: signedOutSuccess})
        });
    }
}

export function signUp(newUser) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const db = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(response => {
            return db.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: (newUser.firstName[0] + newUser.lastName[0]).toUpperCase()
            });
        }).then(() => {
            dispatch({
                type: signUpSuccess
            });
        }).catch(err => {
            dispatch({
                type: signUpFailed,
                err
            });
        });
    };
}