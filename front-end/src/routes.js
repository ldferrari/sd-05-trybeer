import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login, Profile, Products } from './pages';
import Register from './pages/Register/Register';

const Rotas = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route path="/profile" component={ Profile } />
    <Route path="/products" component={ Products } />
    <Route exact path="/register" component={ Register } />
    <Route exact path="/" component={ () => <Redirect to="/login" /> } />

  </Switch>
);

export default Rotas;
