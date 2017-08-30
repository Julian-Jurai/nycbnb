import { UPDATE_SEARCH } from '../actions/search_actions' ;

const SearchReducer = (state = "", action) => {
  Object.freeze(state);
  switch(action.type) {
    case  UPDATE_SEARCH :
    return action.addressInput;
  default:
    return state;
  }
};

export default SearchReducer;
