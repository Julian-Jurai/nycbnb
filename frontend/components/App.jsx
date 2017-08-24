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

//unsure
import siteNavButtons from './header/site_nav_buttons';
//test
// import HomesIndex from './homes_index';


export const App = () => {
  return (
    <div>
      <header>
        <AuthRoute path="/" component={SessionFormContainer} />
        <Route path="/" component={SessionButtonContainer} />
        <Route path="/" exact component={siteNavButtons} />
      </header>
        <Route path="/homes" exact component ={HomesIndexContainer} />
    </div>
  );
}

// <Route path="/homes" component={HomesIndexContainer}/>
