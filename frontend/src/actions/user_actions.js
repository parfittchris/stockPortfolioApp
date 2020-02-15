import { signUp } from '../util/user_util';
import { SIGNUP_USER } from './types';


export const signUpUser = user => dispatch => signUp(user)
    .then(res => dispatch({
        type: SIGNUP_USER,
        user: res
    }))
    .fail(errors => console.log(errors));
