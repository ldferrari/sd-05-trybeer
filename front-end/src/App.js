import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import HomePage from './pages/general/HomePage';
import ClientProfile from './pages/client/ClientProfile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/profile" component={ ClientProfile } />
      </Switch>
    </div>
  );
}

export default App;
