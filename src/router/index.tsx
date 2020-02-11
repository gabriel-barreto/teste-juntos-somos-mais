import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => <>Home Page</>,
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
