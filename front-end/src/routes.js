import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Profile,
} from './pages/';
import Products from './pages/Products';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/products" component={Products} />
  </Switch>
);

export default Rotas;
