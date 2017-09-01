
import { connect } from 'react-redux';

import { login, logout, signup, clearSesssionErrors } from '../../actions/session_actions';
import { setSessionUI, resetSessionUI } from '../../actions/session_buttons_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, session_ui }) => {

  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    session_ui
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    setSessionUI: (buttonAction) => dispatch(setSessionUI(buttonAction)),
    resetSessionUI: (buttonAction) => dispatch(resetSessionUI(buttonAction)),
    clearSesssionErrors: () => dispatch(clearSesssionErrors())
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
