import {
    RECEIVE_SPACEPORT,
} from '../actions/spaceport_actions';
import merge from 'lodash/merge';

const flightsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPACEPORT:
            return merge({}, state, action.flights);
        default:
            return state;
    }
}

export default flightsReducer;