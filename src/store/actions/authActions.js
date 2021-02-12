import {loginFailed, loginSuccess, signedOutSuccess, signUpFailed, signUpSuccess} from "./types";

export const signIn = credentials => {
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
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: signedOutSuccess})
        });
    }
};

export const signUp = (newUser) => {
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
};