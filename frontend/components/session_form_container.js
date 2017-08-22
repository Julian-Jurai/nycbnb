import { connect } from 'react-redux';

import { login, logout, signup } from '../actions/session_actions';
import SessionForm from './session_form'


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processFrom = (formType === 'login') ? login : signup;

  return {
    processFrom :user => dispatch(processFrom(user)),
    formType,
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
