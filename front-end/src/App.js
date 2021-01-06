import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import LoginPage from './pages/general/LoginPage';
import ClientProfile from './pages/client/ClientProfile';
import Products from './pages/client/Products';

function App() {
  return (
    <div className="App">    
      <Switch >
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
        <Route path="/profile" component={ ClientProfile } />
          <LoginPage />
        </Route>
        <Route path="/products" component={ Products } />
      </Switch>
    </div>
  );
}

export default App;
