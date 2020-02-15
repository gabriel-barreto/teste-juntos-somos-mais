import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Home';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => <HomePage />,
    exact: true,
  },
];

export default () => (
  <Router>
    <Switch>
      {routes.map(route => (
        <Route
          exact={route.exact}
          key={route.name}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);
