import React from 'react';
import { Link } from 'react-router-dom';


export const TripItem = (props) => {

  return (
    <div className="trip-item">
      <Link to={`/homes/${props.home.id}`}>
        <img src={props.home.image}/>
      </Link>
      <h3>{props.home.address}</h3>
      <p>{props.home.guests} Guests</p>
      <p>{props.home.room_type}</p>
      <h6 id="stars">&#9733; &#9733; &#9733;</h6>
      <h5>Read Your Review</h5>
      <h5 className="view-receipt">View Receipt</h5>
      <h5>Send or request money</h5>
    </div>
  );
};
