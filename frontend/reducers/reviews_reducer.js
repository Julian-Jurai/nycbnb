import { merge } from 'lodash';
import { RECEIVE_REVIEWS_FOR_HOME, RECEIVE_SINGLE_REVIEW_FOR_HOME } from '../actions/reviews_actions';


const ReviewsReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS_FOR_HOME:
      return action.reviews;
    case RECEIVE_SINGLE_REVIEW_FOR_HOME:
      return merge({}, state, {[action.review.id]: action.review});
    default:
      return state;
  }
};

export default ReviewsReducer;
