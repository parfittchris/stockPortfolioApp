import { GET_USER } from '../actions/types';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_USER:
            return merge({}, state, {[action.user.id] : action.user})
        default:
            return state
    }
}

export default usersReducer;