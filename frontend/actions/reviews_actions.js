import * as APIUtil from '../util/reviews_util';

export const RECEIVE_REVIEWS_FOR_HOME = "RECEIVE_REVIEWS_FOR_HOME";
export const RECEIVE_SINGLE_REVIEW_FOR_HOME = "RECEIVE_SINGLE_REVIEW_FOR_HOME";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEWS_ERRORS = "RECEIVE_REVIEWS_ERRORS";


export const receiveReviewsForHome = (reviews) => {

  return {
    type: RECEIVE_REVIEWS_FOR_HOME,
    reviews
  };
};

export const receiveSingleReviewForHome = (review) => {

  return {
    type: RECEIVE_SINGLE_REVIEW_FOR_HOME,
    review
  };
};

export const receiveErrors = (errors) => {
  
  return{
      type: RECEIVE_REVIEWS_ERRORS,
      errors
  };
};

export const deleteReviewForHome = (review) => {
  return{
      type: DELETE_REVIEW,
      review,
  };
};

export const fetchReviewsForHome = (homeId) => (dispatch) => {

  return (
    APIUtil.fetchReviewsForHome(homeId).then(
      reviews => {
        return dispatch(receiveReviewsForHome(reviews));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const createReviewForHome = (review) => (dispatch) => {

  return (
    APIUtil.createReview(review).then(
      review => {
        return dispatch(receiveSingleReviewForHome(review));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const updateReviewForHome = (review) => (dispatch) => {

  return (
    APIUtil.updateReview(review).then(
      review => {
        return dispatch(receiveSingleReviewForHome(review));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const deleteReview = (reviewId) => (dispatch) => {

  return (
    APIUtil.deleteReview(reviewId).then(
      review => {
        return dispatch(deleteReviewForHome(review));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};
