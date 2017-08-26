import * as APIUtil from '../util/homes_util';

export const RECEIVE_ALL_HOMES = "RECEIVE_ALL_HOMES";
export const RECEIVE_SINGLE_HOME = "RECEIVE_SINGLE_HOME";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveSingleHome = (home) => {
  
  // { id,....}
  return{
    type: RECEIVE_SINGLE_HOME,
    home,
  };
};

export const receiveAllHomes = (homes) => {

  return{
    type: RECEIVE_ALL_HOMES,
    homes,
  };
};

export const receiveErrors = (errors) => {
  return{
      type: receiveErrors,
      errors
  };
};

//thunkactions

export const fetchAllHomes = () => (dispatch) => {

  return (
    APIUtil.fetchAllHomes().then(
      homes => {

        return dispatch(receiveAllHomes(homes));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};

export const fetchSingleHome = (homeId) => (dispatch) => {

  return (

    APIUtil.fetchSingleHomes(homeId).then(
      home => dispatch(receiveSingleHome(home)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};
