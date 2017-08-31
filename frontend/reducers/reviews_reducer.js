import { merge } from 'lodash';
import { RECEIVE_REVIEWS_FOR_HOME } from '../actions/reviews_actions';


const ReviewsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS_FOR_HOME:
      return action.reviews;
    default:
      return state;
  }
};

export default ReviewsReducer;
