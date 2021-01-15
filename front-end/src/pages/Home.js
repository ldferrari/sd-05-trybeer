import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Login, Register, Products, Orders, Profile, ClientOrders, Checkout,
} from '.';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/orders" component={ ClientOrders } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/admin/profile" component={ Profile } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route exact path="/admin/orders" component={ Orders } />
    </Switch>
  </Router>
);

export default Home;
