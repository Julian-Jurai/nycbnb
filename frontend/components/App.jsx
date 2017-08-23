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
import SessionButtonContainer from './session_button_container';

export const App = () => {
  return (
    <div>
      <Route path="/" component={SessionButtonContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </div>
  );
}
