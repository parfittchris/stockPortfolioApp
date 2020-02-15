import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import IndexPage from './userIndexPage';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(IndexPage);
