import { merge } from 'lodash';
import { RECEIVE_ALL_HOMES, RECEIVE_SINGLE_HOME, RECEIVE_ERRORS } from '../actions/homes_actions';


const HomesReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_HOMES:
      return action.homes;
    case RECEIVE_SINGLE_HOME:

      return merge({}, state, {[action.home.id]: action.home});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default HomesReducer;
