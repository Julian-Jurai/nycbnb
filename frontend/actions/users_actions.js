import * as APIUtil from '../util/users_util';

export const RECEIVE_USERS_TRIPS = "RECEIVE_USERS_TRIPS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveAllUsersTrips = (trips) => {
  debugger
  return{
    type: RECEIVE_USERS_TRIPS,
    trips
  };
};

export const receiveErrors = (errors) => {
  return{
      type: RECEIVE_ERRORS,
      errors
  };
};

//thunkactions

export const fetchAllUserTrips = (userId) => (dispatch) => {
  debugger
  return (
    APIUtil.fetchAllHomesForUser(userId).then(
      trips => {
        debugger
        return dispatch(receiveAllUsersTrips(trips.homes));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};
