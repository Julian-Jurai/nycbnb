import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
});

const FiltersReducer = (state = defaultFilters, action) => {

  Object.freeze(state);
  switch(action.type) {
    case  UPDATE_BOUNDS:
      return action.bounds;
    default:
      return state;
  }
};

export default FiltersReducer;
