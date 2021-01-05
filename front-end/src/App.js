import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          Login
        </Route>
      </Switch>
    </div>
  );
}

export default App;
