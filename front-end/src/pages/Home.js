import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login, Register, Products, Orders, Profile,
} from '.';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/admin/orders" component={ Orders } />
      <Route exact path="/profile" component={ Profile } />
    </Switch>
  </Router>
);

export default Home;
