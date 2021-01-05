import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientProfile from './pages/client/ClientProfile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={ClientProfile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
