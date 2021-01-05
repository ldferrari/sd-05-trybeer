import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import LoginPage from './pages/general/LoginPage';
import ClientProfile from './pages/client/ClientProfile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
        <Route path="/profile" component={ClientProfile}/>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
