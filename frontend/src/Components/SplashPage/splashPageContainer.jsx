import { connect} from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import { signUpUser } from '../../actions/user_actions';

import SplashPage from './splashPage.jsx';

const mapDispatchToProps = dispatch => {
    return ({
        login: user => dispatch(loginUser(user)),
        signUp: user => dispatch(signUpUser(user))
    });
}

export default connect(null, mapDispatchToProps)(SplashPage);