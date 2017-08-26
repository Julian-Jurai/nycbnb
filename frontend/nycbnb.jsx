import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { Root } from './components/root';

//test imports
// import * as APIUtil from './util/homes_util';
// import { fetchAllHomes, fetchSingleHome } from './actions/homes_actions';
import * as APIUtil from './util/booking_util';
// import * as SessionAction from './actions/session_actions';
//test imports end


document.addEventListener("DOMContentLoaded", () =>{

  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



  //test starts
  // window.fetchAllHomes = fetchAllHomes;
  // window.fetchAllHomes = APIUtil.fetchAllHomes;
  // window.fetchSingleHome = fetchSingleHome;

  window.fetchAllBookingForUser = APIUtil.fetchAllBookingForUser;
  window.fetchAllBookingForHome = APIUtil.fetchAllBookingForHome;
  window.createBooking = APIUtil.createBooking;
  window.destroyBooking = APIUtil.destroyBooking;


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
