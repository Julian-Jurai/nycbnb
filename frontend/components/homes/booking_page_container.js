import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBooking } from '../../util/booking_util';
import BookingPage from './booking_page';
import { setBookingUI } from '../../actions/booking_actions';



const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    currentUser :state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    currentHome: ownProps.currentHome,
    setBookingUI: (bookingFormState) => dispatch(setBookingUI(bookingFormState)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
