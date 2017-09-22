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

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);


});
