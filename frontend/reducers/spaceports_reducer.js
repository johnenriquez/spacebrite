import {
    RECEIVE_SPACEPORTS,
    RECEIVE_SPACEPORT,
} from '../actions/spaceport_actions';

const spaceportsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPACEPORTS:
            return action.spaceports;
        case RECEIVE_SPACEPORT:
            return Object.assign({}, state, { [action.spaceport.id]: action.spaceport });
        default:
            return state;
    }
}

export default spaceportsReducer;