import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Provider from './context/Provider';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/products" component={ Products } />
            <Route exact path="/register" component={ Register } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
