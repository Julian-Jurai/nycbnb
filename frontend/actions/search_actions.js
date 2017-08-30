
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const receiveSearch = (addressInput) => {
  return (
    {
    type: UPDATE_SEARCH,
    addressInput
    }
  );
};

export const updateSearch = (addressInput) => (dispatch) => {
  return dispatch(receiveSearch(addressInput));
};
