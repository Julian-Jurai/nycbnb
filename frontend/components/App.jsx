import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session_form_container';
import SessionButtonContainer from './session_button_container';
//unsure
import siteNavButtons from './site_nav_buttons';
//test
import HomesIndex from './homes_index';

export const App = () => {
  return (
    <div>
      <header>
        <AuthRoute path="/" component={SessionFormContainer} />
        <Route path="/" component={SessionButtonContainer} />
        <Route path="/" exact component={siteNavButtons} />
      </header>
        <Route path="/homes" exact component ={HomesIndex} />
    </div>
  );
}

// <Route path="/homes" component={HomesIndexContainer}/>
