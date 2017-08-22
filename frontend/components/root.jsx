import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';


import { App } from './App';

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);
