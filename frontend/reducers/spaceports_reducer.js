import { RECEIVE_SPACEPORTS } from '../actions/spaceport_actions';

const spaceportsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPACEPORTS:
            return action.spaceports;
        default:
            return state;
    }
}

export default spaceportsReducer;