import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingForm from './booking_form';
import { setBookingUI } from '../../actions/booking_actions';



const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    currentUser :state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    currentHome: ownProps.currentHome,
    setBookingUI: (bookingFormState) => dispatch(setBookingUI(bookingFormState))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
