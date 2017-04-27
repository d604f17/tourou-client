import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppLayout from 'layouts/App';
import HomePage from 'pages/Home';
import CreatePage from 'pages/Create';
import Sink from 'pages/Sink';

const AppLayoutRoute = ({component: Component, ...args}) => {
  return (
      <Route {...args} render={props => (
          <AppLayout {...props}>
            <Component {...props}/>
          </AppLayout>
      )}/>
  );
};

const routes = () => (
    <Router>
      <Switch>
        <AppLayoutRoute exact path="/" component={HomePage}/>
        <Route exact path="/create" render={props => (
            <CreatePage {...props}/>
        )}/>
        <Route exact path="/sink" render={props => (
            <Sink {...props}/>
        )}/>
      </Switch>
    </Router>
);

export default routes;