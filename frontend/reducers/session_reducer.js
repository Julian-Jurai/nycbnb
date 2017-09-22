import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import { LOGOUT } from '../actions/session_buttons_actions';
import { merge } from 'lodash';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case CLEAR_SESSION_ERRORS:
      newState =  merge({}, state);
      delete newState.errors;
      return newState;
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default sessionReducer;
