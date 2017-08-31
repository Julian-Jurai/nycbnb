import React from 'react';
import { Link } from 'react-router-dom';




const ReviewItem = ({review}) => {

  let randNum =  Math.floor(Math.random() * (20 - 1) + 1);

  let stars = [];
  let num = review.rating
  for (var i = 0; i < num; i++) {
    stars.push(<i className="fa fa-star" aria-hidden="true"></i>)
  }

  return (
    <div className="review-item">
      <div className="review-item-edit-delete">
        <div className="review-item-edit-">

        </div>
        <div className="review-item-delete">

        </div>

      </div>

      <div className="review-item-header">
        <div className="review-item-header-right">
          <img src={review.user.image} id="user-avatar"></img>
          <div>
            <p>{review.user.username}</p>
            <p>{review.updated_at}</p>
            <p>{review.user.rating}</p>
            <span id="stars" className="user-reviews">
              { stars }
            </span>
          </div>
        </div>

        <div className="review-item-header-left">
          <i className="fa fa-flag-o" aria-hidden="true">Report</i>
          <i className="fa fa-thumbs-o-up" aria-hidden="true">Helpful</i>
          <div id="helpful-tag">
            <p>{`${randNum}`}</p>
          </div>
        </div>
      </div>

      <p>{review.body}</p>
    </div>
  );
};








export default ReviewItem;
