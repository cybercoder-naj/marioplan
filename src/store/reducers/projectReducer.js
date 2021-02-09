import {addProject, addProjectError} from "../actions/types";

const initState = {
    projects: [
        {
            id: 1,
            title: 'help me find peach',
            content: 'blah blah blah'
        },
        {
            id: 2,
            title: 'collect all the stars',
            content: 'blah blah blah'
        },
        {
            id: 3,
            title: 'egg hunt with yoshi',
            content: 'blah blah blah'
        }
    ]
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