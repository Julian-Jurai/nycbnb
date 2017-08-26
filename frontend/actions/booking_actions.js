import * as APIUtil from '../util/booking_util';

export const STORE_BOOKING = "STORE_BOOKING";
export const CLEAR_BOOKING = "CLEAR_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";



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

// export const resetBookingUI = (booking) => {
//   return {
//     type: CREATE_BOOKING,
//     booking,
//   };
// };
