import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

import SessionButtonContainer from './session_button_container';
import SessionFormContainer from './session_form_container';
import SearchFormButtons from './search_form_buttons';
import subNavButtons from './sub_nav_buttons';

const mainNav = () => {
  return(
    <div className="main-nav">
      <Route path="/" component={SearchFormButtons} />
      <AuthRoute path="/" component={SessionFormContainer} />
    </div>
  );
};


const subNav = () => {
  return(
    <div className="sub-nav">
      <Route path="/" component={subNavButtons} />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      {mainNav}
      {subNav}
    </div>
  );
};

export default Header;

// <Route path="/" component={SearchFormButtons} />
// <AuthRoute path="/" component={SessionFormContainer} />
//
// </header>
// <Route path="/" exact component={siteNavButtons} />
// <Route path="/homes" exact component ={HomesIndexContainer} />
