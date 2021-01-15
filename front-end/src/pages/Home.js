import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Login, Register, Products, Orders, Profile, Checkout, OrdersDetails,
} from '.';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/admin/profile" component={ Profile } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route exact path="/admin/orders" component={ Orders } />
      {/*  usado UM em"/orders/1" p/teste */}
      <Route exact path="/orders/1" component={ OrdersDetails } />
    </Switch>
  </Router>
);

export default Home;
