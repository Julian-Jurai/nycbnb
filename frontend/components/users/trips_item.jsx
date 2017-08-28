import React from 'react';
import { Link } from 'react-router-dom';


export const TripItem = (props) => {
  debugger
  return (
    <div className="trip-item">
      <img src={props.home.image}/>
      <p>{props.home.guests}</p>
      <h5>{props.home.room_type}</h5>
      <h5>Read Your Review</h5>
      <h5 className="view-receipt">View Receipt</h5>
      <h5>Send or request money</h5>
    </div>
  );
};
