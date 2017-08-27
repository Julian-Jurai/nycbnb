import * as APIUtil from '../util/booking_util';

export const STORE_BOOKING = "STORE_BOOKING";
export const CLEAR_BOOKING = "CLEAR_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";



export const setBookingUI = (booking) => {
  return {
    type: STORE_BOOKING,
    booking,
  };
};

export const resetBookingUI = (booking) => {
  return {
    type: CLEAR_BOOKING,
    booking,
  };
};


export const receiveBooking = (booking) => {
  return ({
    type: CREATE_BOOKING,
    booking,
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors,
  });
};



export const createBooking = (booking) => (dispatch) => {
  return(

    APIUtil.createBooking(booking).then(
      (booking) => dispatch(receiveBooking(booking)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

  );
};
