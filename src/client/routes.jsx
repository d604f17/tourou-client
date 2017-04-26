import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AppLayout from 'layouts/App';

export default routes = () => (
    <Router>
      <Route exact path="/" component={AppLayout}/>
    </Router>
);