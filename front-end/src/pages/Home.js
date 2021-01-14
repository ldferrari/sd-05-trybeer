import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login, Register, Products, ClientOrders, AdminOrders, Profile, ClientOrdersDetails
} from '.';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/orders" component={ ClientOrders } />
      <Route exact path="/orders/:numero-do-pedido" component={ ClientOrdersDetails } />
      <Route exact path="/admin/orders" component={ AdminOrders } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/admin/profile" component={ Profile } />
    </Switch>
  </Router>
);

export default Home;
