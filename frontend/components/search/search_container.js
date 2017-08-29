import { connect } from 'react-redux';

// import { fetchSingleHome, fetchAllHomes } from '../../actions/homes_actions';
import Search from './search';
import { updateBounds, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return {
    homes: state.homes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
