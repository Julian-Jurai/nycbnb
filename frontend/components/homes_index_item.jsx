import React from 'react';
import { Link } from 'react-router-dom';


const HomesIndexItem =({home}) => {

  // const randStar = () => {
  //   let num = (Math.round(Math.random()*5) + 1)
  //   let str = "&#9733; "
    // for (var i = 0; i < num; i++) {
    //   str += str
    // }
  // return str;
  // }



  return (
    <div>
      <div>
        <img src={home.image} className="home-index-image"/>
        <span>{home.title}</span>
        <span>From ${home.price} &middot;  </span>
        <span>{home.title}</span>
      </div>
      <div>
        <span>{home.room_type}</span>
        <span>{home.beds} beds</span>
      </div>
      <div>
        <span>&#9733; &#9733; &#9733;</span>
      </div>
    </div>

  );
};


export default HomesIndexItem;
