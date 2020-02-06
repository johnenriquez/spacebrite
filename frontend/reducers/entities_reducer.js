import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spaceportsReducer from "./spaceports_reducer";
import flightsReducer from "./flights_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    spaceports: spaceportsReducer,
    flights: flightsReducer,
});

export default entitiesReducer;