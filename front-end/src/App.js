import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Provider from './context/Provider';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';
import Profile from './pages/profile';
// import Orders from './pages/orders';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/products" component={ Products } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/profile" component={ Profile } />
            {/* <Route exact patch="/admin/orders" component={ Orders }> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
