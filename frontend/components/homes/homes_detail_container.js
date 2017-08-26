import { connect } from 'react-redux';

import { fetchSingleHome, fetchAllHomes } from '../../actions/homes_actions';
import HomesDetail from './homes_detail';


const mapStateToProps = (state) => {

  return {
    homes: state.homes,
    currentUser :state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchAllHomes: () => dispatch(fetchAllHomes()),
    fetchSingleHome: (homeId) => dispatch(fetchSingleHome(homeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomesDetail);
