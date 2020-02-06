import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import spaceportsErrorsReducer from './spaceports_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    spaceports: spaceportsErrorsReducer,
});

export default errorsReducer;