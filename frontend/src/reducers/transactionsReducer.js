import { GET_ALL_TRANSACTIONS } from '../actions/types';
import { merge } from 'lodash';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_ALL_TRANSACTIONS:
            return merge({}, state, action.transactions)
        default:
            return state
    }
}

export default transactionsReducer;