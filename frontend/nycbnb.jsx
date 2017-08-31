import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { Root } from './components/root';

//test imports
// import * as APIUtil from './util/homes_util';
// import { fetchAllHomes, fetchSingleHome } from './actions/homes_actions';
import { fetchReviewsForHome } from './actions/reviews_actions';
// import * as APIUtil from './util/booking_util';
// import * as APIUtil from './actions/users_actions';
// import MarkerManager from './util/marker_manager';
// import { updateFilter } from './actions/filter_actions';
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



  //test starts######################################################
  // window.fetchAllHomes = fetchAllHomes;
  // window.updateFilter = updateFilter;
  // window.fetchReviewsForHome = fetchReviewsForHome;
  // window.fetchAllHomes = APIUtil.fetchAllHomes;
  // // window.fetchSingleHome = fetchSingleHome;
  //
  // window.fetchAllUserTrips = APIUtil.fetchAllUserTrips;
  // window.coord =
  //     {
  //       "northEast": {
  //         "lat": "40.777",
  //         "lng":"-73.986"
  //       },
  //       "southWest": {
  //         "lat": "40.7140",
  //         "lng": "-74.030"
  //       }
  //     };

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.login = SessionAction.login;
  // window.signup = SessionAction.signup;
  // window.logout = SessionAction.logout;
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;

  //testends#########################################################



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);


});
