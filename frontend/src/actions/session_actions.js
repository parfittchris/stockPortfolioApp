import { login, logout } from '../util/session_util';
import { LOGIN_USER, LOGOUT_USER } from './types';


export const loginUser = user => dispatch => login(user)
            .then(res => dispatch({
                type: LOGIN_USER,
                user: res
            }))
            .fail(errors => console.log(errors));

export const logoutUser = () => dispatch => logout()
             .then(() => dispatch({
                 type: LOGOUT_USER
             }))
             .fail(errors => console.log(errors));