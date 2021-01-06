import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import HomePage from './pages/general/HomePage';
import ClientProfile from './pages/client/ClientProfile';
import Login from './pages/admin/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile" component={ ClientProfile } />
      </Switch>
    </div>
  );
}

export default App;
