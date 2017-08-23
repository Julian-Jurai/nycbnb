// import { connect } from 'react-redux';
//
// import { login, logout, signup } from '../actions/session_actions';
// import SessionForm from './session_form'
//
//
// const mapStateToProps = ({ session }) => {
//   return {
//     loggedIn: Boolean(session.currentUser),
//     errors: session.errors
//   };
// };
//
// const mapDispatchToProps = (dispatch, { location }) => {
//   const formType = location.pathname.slice(1);
//   const processFrom = (formType === 'login') ? login : signup;
//
//   return {
//     processFrom :user => dispatch(processFrom(user)),
//     formType,
//   };
//
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
import { connect } from 'react-redux';

import { login, logout, signup } from '../actions/session_actions';
import { setSessionUI, resetSessionUI } from '../actions/session_buttons_actions';
import SessionForm from './session_form'


const mapStateToProps = ({ session, session_ui }) => {
  debugger


  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    session_ui
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  debugger
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    setSessionUI: (buttonAction) => dispatch(setSessionUI(buttonAction)),
    resetSessionUI: (buttonAction) => dispatch(resetSessionUI(buttonAction))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
