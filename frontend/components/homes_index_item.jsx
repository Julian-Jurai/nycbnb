import React from 'react';
import { Link } from 'react-router-dom';

const HomesIndexItem =({home}) => {
  return (
    <div>
      <span>{home.id}</span>
      <span>From</span>
      <span>{home.price}</span>
      <span>{home.title}</span>
        <br></br>
      <span>{home.room_type}</span>
        <br></br>
      <span>{home.beds}</span>
    </div>

  );
};

export default HomesIndexItem;
