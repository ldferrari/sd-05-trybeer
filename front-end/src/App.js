import React from 'react';
import Provider from './context/Provider';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
