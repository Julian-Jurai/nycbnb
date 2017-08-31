import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const subNavButtons = (props) => {

  let marginFix;
  if (props.location.pathname === "/"){
    marginFix = "with-greeting";
  } else { marginFix = "";}

  let classname;
  if (props.location.pathname === "/homes"){
    classname = "selected-site-nav-button";
  } else classname = "site-nav-button";


  return (
    <div className={`site-nav-buttons ${marginFix}`}>

        <Link className={`${classname}`} to="/homes"> Homes </Link>
        <Link className={`${classname}`} to="/experiences"> Experiences </Link>
        <Link className={`${classname}`} to="/places"> Homes </Link>
      

    </div>
  );
};


export default withRouter(subNavButtons);
