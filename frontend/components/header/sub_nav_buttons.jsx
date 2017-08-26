import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const subNavButtons = (props) => {

  let marginFix;
  if (props.location.pathname === "/"){
    marginFix = "with-greeting";
  } else { marginFix = "";}


  return (
    <div className={`site-nav-buttons ${marginFix}`}>

        <Link className="selected-site-nav-button" to="/homes"> Homes </Link>
        <Link className="selected-site-nav-button" to="/"> HomePage </Link>



    </div>
  );
};


export default withRouter(subNavButtons);
