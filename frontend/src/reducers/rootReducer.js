import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer';
import errorsReducer from './errorsReducer';
import stockReducer from './stockReducer';


export default combineReducers({
    sessionsReducer,
    usersReducer,
    errorsReducer,
    stockReducer
});