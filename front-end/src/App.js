import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import HomePage from './pages/general/HomePage';
<<<<<<< HEAD
=======
import ClientProductPage from './pages/client/ClientProductPage';
>>>>>>> 8015f4657bf3a2d2347d90ea92cf618fdd34e689
import ClientProfilePage from './pages/client/ClientProfilePage';
import LoginPage from './pages/admin/LoginPage';
import ClientProductPage from './pages/client/ClientProductPage';
import ClientOrderPage from './pages/client/ClientOrderPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component= { LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/products" component={ ClientProductPage } />
        <Route path="/profile">
          <ClientProfilePage />
          {/* {!loggedIn ? <Redirect to="/login" /> : <ClientProfilePage />} */}
        </Route>
        <Route path="/orders" component={ ClientOrderPage } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
