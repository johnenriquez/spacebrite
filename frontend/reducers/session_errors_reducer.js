import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const defaultState = {
    errors: [],
};

const sessionErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, state, { errors: action.errors });
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { errors: [] });
        default:
            return state;
    }
}

export default sessionErrorsReducer;