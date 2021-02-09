import {addProject} from './types.js';

export const createProject = project => {
    return (dispatch, getState) => {
        // TODO make async call to database
        dispatch({
            type: addProject,
            project
        });
    };
};