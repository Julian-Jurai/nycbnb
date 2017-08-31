import { connect } from 'react-redux';

import { fetchSingleHome, fetchAllHomes } from '../../actions/homes_actions';
import { fetchReviewsForHome } from '../../actions/reviews_actions';
import { fetchAllUserTrips } from '../../actions/users_actions';
import HomesDetail from './homes_detail';


const mapStateToProps = (state) => {

  return {
    homes: state.homes,
    loggedIn: Boolean(state.session.currentUser),
    currentUser :state.session.currentUser,
    reviews_ui: state.reviews_ui,
    trips_ui: state.trips_ui
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchAllHomes: () => dispatch(fetchAllHomes()),
    fetchReviewsForHome: (homeId) => dispatch(fetchReviewsForHome(homeId)),
    fetchSingleHome: (homeId) => dispatch(fetchSingleHome(homeId)),
    fetchAllUserTrips: (userId) => dispatch(fetchAllUserTrips(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomesDetail);
