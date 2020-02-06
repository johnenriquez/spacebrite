import {
    RECEIVE_SPACEPORT_ERRORS,
    CLEAR_SPACEPORT_ERRORS,
} from '../actions/spaceport_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPACEPORT_ERRORS:
            return action.errors;
        case CLEAR_SPACEPORT_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;