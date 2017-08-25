import React from 'react';
import { Link } from 'react-router-dom';


const subNavButtons = (props) => {
  debugger


  return (
    <div className="site-nav-buttons">

        <Link className="selected-site-nav-button" to="/homes"> Homes </Link>
        <Link className="selected-site-nav-button" to="/"> HomePage </Link>


      <br></br>

    </div>
  );
};


export default subNavButtons;
