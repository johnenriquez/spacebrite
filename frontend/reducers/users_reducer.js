import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = {}

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return (action.user.id) ? Object.assign(
                {},
                state,
                { [action.user.id]: action.user }
            ) : state;
        default:
            return state;
    }
}

export default usersReducer;