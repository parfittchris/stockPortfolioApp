import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer';
import errorsReducer from './errorsReducer';




export default combineReducers({
    sessionsReducer,
    usersReducer,
    errorsReducer
});