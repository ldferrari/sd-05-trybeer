import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import HomePage from './pages/general/HomePage';
import ClientProductPage from './pages/client/ClientProductPage';
import ClientProfilePage from './pages/client/ClientProfilePage';
import LoginPage from './pages/general/LoginPage';
import ClientOrderPage from './pages/client/ClientOrderPage';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/products" component={ ClientProductPage } />
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/orders" component={ ClientOrderPage } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
