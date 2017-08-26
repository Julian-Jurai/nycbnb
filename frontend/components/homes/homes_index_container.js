import { connect } from 'react-redux';

import { fetchAllHomes, fetchSingleHomes } from '../../actions/homes_actions';
import { selectAllHomes } from '../../reducers/selectors';
import HomesIndex from './homes_index';


const mapStateToProps = (state) => {
  return {
    homes: selectAllHomes(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllHomes: () => dispatch(fetchAllHomes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomesIndex);
