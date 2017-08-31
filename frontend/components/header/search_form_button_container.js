import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { setSessionUI } from '../../actions/session_buttons_actions';
import { updateSearch } from '../../actions/search_actions';
import SearchFormButtons from './search_form_buttons';

const mapStateToProps = (state, ownProps) => {
  return {
    session_ui: state.search_ui,

  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    updateSearch: (addressInput) => dispatch(updateSearch(addressInput))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormButtons);
