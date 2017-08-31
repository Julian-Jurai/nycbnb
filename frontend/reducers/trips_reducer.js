import { merge } from 'lodash';
import { RECEIVE_USERS_TRIPS, RECEIVE_TRIPS_ERRORS } from '../actions/users_actions';


const TripsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS_TRIPS:
      return action.trips;
    case RECEIVE_TRIPS_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default TripsReducer;
