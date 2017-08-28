import { connect } from 'react-redux';

import { fetchAllUserTrips } from '../../actions/users_actions';
import { selectAllTrips } from '../../reducers/selectors';

import Trips from './trips';

const mapStateToProps = (state) => {
  debugger
  return {
    trips: selectAllTrips(state),
    currentUser :state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUserTrips: (userId) => dispatch(fetchAllUserTrips(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
