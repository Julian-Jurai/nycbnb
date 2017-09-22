import { merge } from 'lodash';
import { RECEIVE_REVIEWS_FOR_HOME, RECEIVE_SINGLE_REVIEW_FOR_HOME, DELETE_REVIEW, RECEIVE_REVIEWS_ERRORS } from '../actions/reviews_actions';


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_REVIEWS_FOR_HOME:
      return action.reviews;
    case RECEIVE_SINGLE_REVIEW_FOR_HOME:
      let id = Object.keys(action.review)[0];
      let review = Object.values(action.review)[0];
      return merge({}, state, {
        [id]: review
      });
    case RECEIVE_REVIEWS_ERRORS:
      return merge({}, state, {errors: action.errors});
    case DELETE_REVIEW:
      newState = merge({}, state);
      let old_id = Object.keys(action.review)[0];
      delete newState[old_id];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
