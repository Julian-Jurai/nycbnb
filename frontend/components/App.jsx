import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './header/session_form_container';
import SessionButtonContainer from './header/session_button_container';
import HomesIndexContainer from './homes/homes_index_container';
import SearchFormButtons from './header/search_form_buttons';
import subNavButtons from './header/sub_nav_buttons';
import HomesDetailContainer from './homes/homes_detail_container';
import BookingPageContainer from './booking/booking_page_container';
import TripsContainer from './users/trips_container';
import SearchFormButtonsContainer from './header/search_form_button_container';
import HomePage from './header/home_page';
import ExperiencesPage from './header/experiences_page';
import PlacesPage from './header/places_page';
import Favicon from 'react-favicon';
//test
import Trips from './users/trips';
import SearchContainer from './search/search_container';
// test ends




const Header = (props) => {

  let show;
  if (props.location.pathname == "/homes"){
    show= "show-header";
  } else show = "";


  return (
    <header className={`header-container ${show}`}>

      <header className="top-nav">
        <Route path="/"  component={SearchFormButtonsContainer} />
        <SessionButtonContainer />
      </header>
      <Route path="/" exact component={Greeting} />
      <header className="bottom-nav">
        <Route path="/" component={subNavButtons} />
      </header>
    </header>
  );
};

const Greeting = () => (
  <div className="home-page-greeting">
    <div className="home-page-greeting-title">NYCbnb</div>
    <div className="home-page-greeting-body">
      Book unique homes and experience a city like a local
    </div>
  </div>
);


const Footer = (props) => {
  let show;


  if (props.location.pathname == "/homes"){
    show = "hidden";
  } else show = "";


  return (
    <div className={`footer-container ${show}`}>
      <Favicon url={[window.images.logoicon]}/>
      <div className="footer-main">
        <div>
          <a href="https://www.linkedin.com/in/julian-jurai/" className="profiles" target="_blank">
            <i className="fa fa-linkedin  fa-4x" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/Julian-Jurai"  className="profiles" target="_blank">
            <i className="fa fa-github  fa-4x" aria-hidden="true"></i>
          </a>
      

        </div>

      </div>

      <div className="footer-sub">
          <i className="fa fa-clone" aria-hidden="true"></i>
          <p>NYCbnb, Inc.</p>
      </div>
    </div>
  );
};




export const App = () => {

  return (
    <div>
      <Route component={Header} />
      <Route path="/" component={SessionFormContainer} />
      <Route path="/" exact component={HomePage} />
      <Route path="/experiences" exact component={ExperiencesPage} />
      <Route path="/places" exact component={PlacesPage} />
      <Route path="/homes/:homeId" component={HomesDetailContainer} />
      <ProtectedRoute path="/booking" component={BookingPageContainer} />
      <ProtectedRoute path="/:userId/trips" component={TripsContainer} />
      <Route path="/homes" exact component={SearchContainer} />
      <Route component={Footer}  />
    </div>
  );
};

// <Route path="/homes" component={HomesIndexContainer}/>
