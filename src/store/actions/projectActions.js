import {addProject, addProjectError} from './types.js';

export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Cybercoder',
            authorLastName: 'Nishant',
            authorId: 12345,
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
};