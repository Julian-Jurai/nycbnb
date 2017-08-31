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


//test
import Trips from './users/trips';
import SearchContainer from './search/search_container';
// test ends




const Header = (props) => {
  return (
    <header className="header-container">

      <header className="top-nav">
        <Route path="/" component={SearchFormButtonsContainer} />
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




export const App = () => {

  return (
    <div>
      <Route component={Header} />

      <Route path="/homes##NOTNEEDED" exact component ={HomesIndexContainer} />
      <Route path="/" component={SessionFormContainer} />
      <Route path="/homes/:homeId" component={HomesDetailContainer} />
      <ProtectedRoute path="/booking" component={BookingPageContainer} />
      <ProtectedRoute path="/:userId/trips" component={TripsContainer} />
      <Route path="/homes" exact component={SearchContainer} />
    </div>
  );
};

// <Route path="/homes" component={HomesIndexContainer}/>
