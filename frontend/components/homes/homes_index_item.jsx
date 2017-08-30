import React from 'react';
import { Link } from 'react-router-dom';


const HomesIndexItem = ({home}) => {

    let stars = [];
    let num = (Math.round(Math.random()*4) + 1)
    for (var i = 0; i < num; i++) {
      stars.push(<i className="fa fa-star" aria-hidden="true"></i>)
    }




  return (
    <div className="home-index-item" key={home.id}>
      <Link to={`/homes/${home.id}`}>
        <img src={home.image} className="home-index-image"/>
      </Link>
      <div>
        <span>From ${home.price} &middot;  </span>
        <span>{home.title}</span>
        <span>{home.title}</span>
      </div>
      <div className="home-index-item-feats">
        <span>{home.room_type} &middot; </span>
        <span>{home.beds} beds</span>
      </div>
      <div>
        <span id="stars">
          { stars }
        </span>
      </div>
    </div>

  );
};


export default HomesIndexItem;
