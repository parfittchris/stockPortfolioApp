import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer';



export default combineReducers({
    sessionsReducer,
    usersReducer
});