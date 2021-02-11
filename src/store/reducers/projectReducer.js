import {addProject, addProjectError} from "../actions/types";

const initState = {
    projects: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case addProject:
            console.log('Created project', action.project);
            break;

        case addProjectError:
            console.log('Error on creating project', action.error);
            break;

        default:
            break;
    }
    return state;
};

export default projectReducer;