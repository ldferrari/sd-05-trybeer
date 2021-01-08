import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import LoginPage from './pages/general/LoginPage';
import ClientProfilePage from './pages/client/ClientProfilePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={ RegisterPage } />
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/" component={ LoginPage } />
      </Switch>
    </div>
  );
}

export default App;
