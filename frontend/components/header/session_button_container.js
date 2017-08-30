import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { setSessionUI } from '../../actions/session_buttons_actions';
import { updateSearch } from '../../actions/search_actions';
import SessionButtons from './session_buttons';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    session_ui: state.search_ui
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    updateSearch: (addressInput) => dispatch(updateSearch(addressInput)),
    setSessionUI: (buttonAction) => dispatch(setSessionUI(buttonAction))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
