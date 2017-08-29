import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { setSessionUI } from '../../actions/session_buttons_actions';
import SessionButtons from './session_buttons';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    setSessionUI: (buttonAction) => dispatch(setSessionUI(buttonAction))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
