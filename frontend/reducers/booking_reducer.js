import { merge } from 'lodash';
import { STORE_BOOKING, CLEAR_BOOKING, RECEIVE_BOOKING,RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';


const BookingReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState;
  switch(action.type) {
    case STORE_BOOKING:
      return action.booking; //currentHome, startdate, end date
    case CLEAR_BOOKING:
      return {};
    case RECEIVE_BOOKING:
      return {};
    case RECEIVE_BOOKING_ERRORS:
      return {errors: action.errors};
    default:
      return state;
  }
};

export default BookingReducer;
