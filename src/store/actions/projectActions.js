import {addProject, addProjectError} from './types.js';

export function createProject(project) {
    return (dispatch, getState, {getFirestore}) => {
        const db = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        console.log(profile);
        db.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: addProject,
                project
            });
        }).catch(error => {
            dispatch({
                type: addProjectError,
                error
            });
        });
    };
}