import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Login, Register, Products, Orders, Profile, Checkout,
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
<<<<<<< HEAD
      <Route exact path="/checkout" component={ Checkout } />
=======
      <Route exact path="/admin/orders" component={ Orders } />
>>>>>>> 37c9b1a7883b1b5e77dae8a72cabda05664bb7ae
    </Switch>
  </Router>
);

export default Home;
