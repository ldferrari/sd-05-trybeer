import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Profile,
} from './pages';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/profile" component={ Profile } />
  </Switch>
);

export default Rotas;
