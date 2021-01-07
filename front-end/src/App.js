import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import LoginPage from './pages/general/LoginPage';
import ClientProduct from './pages/client/ClientProduct';
import ClientProfile from './pages/client/ClientProfile';
import ClientOrder from './pages/client/ClientOrder';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/products" component={ ClientProduct } />
        <Route path="/profile" component={ ClientProfile } />
        <Route path="/orders" component={ ClientOrder } />
      </Switch>
    </div>
  );
}

export default App;
