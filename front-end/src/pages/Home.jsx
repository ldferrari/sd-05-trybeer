import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register } from './';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Home;
