import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login, Register, Products, Orders, Profile, Checkout,
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
      <Route exact path="/admin/profile" component={ Profile } />
      <Route exact path="/checkout" component={ Checkout } />
    </Switch>
  </Router>
);

export default Home;
