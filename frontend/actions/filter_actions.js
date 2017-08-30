import { fetchAllHomes } from './homes_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => {
  return (
    {
    type: UPDATE_BOUNDS,
    bounds
    }
  );
};

export const updateFilter = (filter) => (dispatch, getState) => {
  dispatch(updateBounds(filter));
  return fetchAllHomes(getState().filters)(dispatch);
};
