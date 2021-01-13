import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Login,
  Profile,
  Checkout,
  Products,
  Register,
  OrderAdmin,
  ProfileAdmin,
  OrderAdminDetails,
} from './pages';

const Rotas = () => (
  <Switch>
    <Route exact path="/admin/ordersDetails" component={ OrderAdminDetails } />
    <Route exact path="/admin/orders" component={ OrderAdmin } />
    <Route exact path="/login" component={ Login } />
    <Route path="/profile" component={ Profile } />
    <Route path="/admin/profile/" component={ ProfileAdmin } />
    <Route path="/products" component={ Products } />
    <Route exact path="/register" component={ Register } />
    <Route path="/checkout" component={ Checkout } />
    <Route exact path="/" component={ () => <Redirect to="/login" /> } />
  </Switch>
);

export default Rotas;
