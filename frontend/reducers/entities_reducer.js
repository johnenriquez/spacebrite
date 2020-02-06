import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spaceportsReducer from "./spaceports_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    spaceports: spaceportsReducer,
});

export default entitiesReducer;