import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './header/session_form_container';
import SessionButtonContainer from './header/session_button_container';
import HomesIndexContainer from './homes_index_container';
import SearchFormButtons from './header/search_form_buttons';
import subNavButtons from './header/sub_nav_buttons';
//test
// import HomesIndex from './homes_index';




const Header = () => (
  <header className="header-container">
    <header className="top-nav">
      <Route path="/" component={SearchFormButtons} />
      <SessionButtonContainer />
      <AuthRoute path="/" component={SessionFormContainer} />
    </header>
    <header className="bottom-nav">
      <Route path="/"  component={subNavButtons} />
    </header>
  </header>
);




export const App = () => {
  return (
    <div>

      <Header />
      <Route path="/homes" exact component ={HomesIndexContainer} />
    </div>
  );
};

// <Route path="/homes" component={HomesIndexContainer}/>
