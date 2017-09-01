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

//test
import Trips from './users/trips';
import SearchContainer from './search/search_container';
// test ends




const Header = (props) => {
  return (
    <header className="header-container">

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
  debugger

  if (props.location.pathname == "/homes"){
    show = "hidden";
  } else show = "";


  return (
    <div className={`footer-container ${show}`}>
      <div className="footer-main">
        <div>
          <h5>NYCbnb</h5>
          <p>About us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Policies</p>
          <p>Help</p>
          <p>Diversity & Belonging</p>
        </div>

        <div>
          <h5>Discover</h5>
          <p>Trust & Safety</p>
          <p>Travel Credit</p>
          <p>Gift Cards</p>
          <p>NYCbnb Citizen</p>
          <p>Business Travel</p>
          <p>Guidebooks</p>
          <p>Nycbnbmag</p>
        </div>

        <div>
          <h5>Hosting</h5>
          <p>Why Host</p>
          <p>Hospitality</p>
          <p>Responsible</p>
          <p>Hosting</p>
          <p>Community Center</p>
        </div>
      </div>

      <div className="footer-sub">
        <div className="footer-sub-left">
          <i className="fa fa-clone" aria-hidden="true"></i>
          <p>NYCbnb, Inc.</p>
        </div>
        <div className="footer-sub-right">
          <div className="footer-sub-right-sub">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Site Map</p>
          </div>
          <div className="footer-sub-right-icons">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};




export const App = () => {
  debugger
  return (
    <div>
      <Route component={Header} />
      <Route path="/" component={SessionFormContainer} />
      <Route path="/####################" exact component={HomePage} />
      <Route path="/homes/:homeId" component={HomesDetailContainer} />
      <ProtectedRoute path="/booking" component={BookingPageContainer} />
      <ProtectedRoute path="/:userId/trips" component={TripsContainer} />
      <Route path="/homes" exact component={SearchContainer} />
      <Route component={Footer}  />
    </div>
  );
};

// <Route path="/homes" component={HomesIndexContainer}/>
