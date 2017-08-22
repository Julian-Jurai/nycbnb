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
import HomesIndexContainer from './homes_index_container';

export const App = () => {
  return (
    <div>
      <Route path="/" exact component={HomesIndexContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
}
