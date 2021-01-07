import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Login from './pages/Login';

const App = () => (
  <Provider>
    <span>TryBeer</span>
    <Home />
  </Provider>
);

export default App;

/* <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter> */
