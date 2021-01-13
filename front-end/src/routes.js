import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Checkout from './pages/checkout';
import Register from './pages/Register/Register';
import {
  Login,
  Profile,
  ProfileAdmin,
  Products,
} from './pages';

const Rotas = () => (
  <Switch>
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
