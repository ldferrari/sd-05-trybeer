import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Login,
  Profile,
} from './pages';
import Register from './pages/Register/Register';

const Rotas = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <Route path="/profile" component={ Profile } />

  </Switch>
);

export default Rotas;
