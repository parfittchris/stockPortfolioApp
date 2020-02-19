import { GET_STOCK } from '../actions/types';
import { merge } from 'lodash';

const stockReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_STOCK:
            return merge({}, state, action.stock)
        default:
            return state
    }
}

export default stockReducer;