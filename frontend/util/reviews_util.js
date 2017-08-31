export const fetchReviewsForHome = (homeId) => {
//WORKS!
  return (
    $.ajax({
      method: "GET",
      url: `/api/homes/${homeId}/reviews`,
    })
  );
};

export const createReview = (review) => {
//Works!
  return (
    $.ajax({
      method: "POST",
      url: `/api/reviews`,
      data: { review }
    })
  );
};

//#13

export const deleteReview = (reviewId) => {
//WORKS!
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/reviews/${reviewId}`
    })
  );
};

export const updateReview = (review) => {
//WORKS!
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/reviews/${reviewId}`,
      data: { review }
    })
  );
};
