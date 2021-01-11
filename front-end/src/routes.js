import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Profile, Products } from './pages';
import Checkout from './pages/checkout';
import Register from './pages/Register/Register';

const Rotas = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route path="/profile" component={ Profile } />
    <Route path="/products" component={ Products } />
    <Route exact path="/register" component={ Register } />
    <Route path="/checkout" component={ Checkout } />
  </Switch>
);

export default Rotas;
