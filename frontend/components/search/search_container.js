import { connect } from 'react-redux';

// import { fetchSingleHome, fetchAllHomes } from '../../actions/homes_actions';
import Search from './search';
import { updateSearch } from '../../actions/search_actions';
import { updateBounds, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return {
    homes: state.homes,
    search_ui: state.search_ui
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    updateSearch: (addressInput) => dispatch(updateSearch(addressInput)),
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
