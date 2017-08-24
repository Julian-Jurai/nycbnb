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
      homes => dispatch(receiveAllHomes(homes)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};

export const fetchSingleHome = (home) => (dispatch) => {
  return (

    APIUtil.fetchSingleHomes().then(
      homes => dispatch(receiveSingleHomes(homes)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};

fetchAllHomes
 fetchSingleHomes

export const login = (user) => (dispatch) => {
  return(

    APIUtil.login(user).then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};
