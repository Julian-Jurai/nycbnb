import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBooking } from '../../actions/booking_actions';
// import { createBooking } from '../../util/booking_util';
import BookingPage from './booking_page';
// import { setBookingUI } from '../../actions/booking_actions';



const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    loggedIn: Boolean(state.session.currentUser),
    currentUser :state.session.currentUser,
    booking_ui: state.booking_ui
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingPage));
