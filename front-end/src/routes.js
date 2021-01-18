import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Login,
  Profile,
  Checkout,
  Orders,
  Products,
  Register,
  OrderAdmin,
  ProfileAdmin,
  OrderAdminDetails,
} from './pages';
import OrderDetails from './pages/orderDetails';

const Rotas = () => (
  <Switch>
    <Route exact path="/admin/orders" component={ OrderAdmin } />
    <Route exact path="/admin/orders/:id" component={ OrderAdminDetails } />
    <Route exact path="/login" component={ Login } />
    <Route path="/profile" component={ Profile } />
    <Route path="/admin/profile" component={ ProfileAdmin } />
    <Route path="/products" component={ Products } />
    <Route exact path="/register" component={ Register } />
    <Route path="/checkout" component={ Checkout } />
    <Route exact path="/orders" component={ Orders } />
    <Route exact path="/orders/:id" component={ OrderDetails } />
    <Route exact path="/" component={ () => <Redirect to="/login" /> } />
  </Switch>
);

export default Rotas;
