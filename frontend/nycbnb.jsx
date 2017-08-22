import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { Root } from './components/root';

//test imports
import * as APIUtil from './util/api_util';
import * as SessionAction from './actions/session_actions';
//test imports end


document.addEventListener("DOMContentLoaded", () =>{
  const store = configureStore();
  //test starts

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.login = SessionAction.login;
  // window.signup = SessionAction.signup;
  // window.logout = SessionAction.logout;
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;

  //testends

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root); // linter error

});
