import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const subNavButtons = (props) => {

  let marginFix;
  if (props.location.pathname === "/"){
    marginFix = "with-greeting";
  } else { marginFix = "";}

  let homesClassName;
  let experiencesClassName;
  let placesClassName;
  let forYouClassName;

  if (props.location.pathname === "/"){
    forYouClassName = "selected-site-nav-button";
  } else forYouClassName = "site-nav-button";

  if (props.location.pathname === "/homes"){
    homesClassName = "selected-site-nav-button";
  } else homesClassName = "site-nav-button";

  if (props.location.pathname === "/experiences"){
    experiencesClassName = "selected-site-nav-button";
  } else experiencesClassName = "site-nav-button";

  if (props.location.pathname === "/places"){
    placesClassName = "selected-site-nav-button";
  } else placesClassName = "site-nav-button";


  return (
    <div className={`site-nav-buttons ${marginFix}`}>

        <Link className={`${forYouClassName}`} to="/"> For You </Link>
        <Link className={`${homesClassName}`} to="/homes"> Homes </Link>
        <Link className={`${experiencesClassName}`} to="/experiences"> Experiences </Link>
        <Link className={`${placesClassName}`} to="/places"> Places </Link>


    </div>
  );
};


export default withRouter(subNavButtons);
