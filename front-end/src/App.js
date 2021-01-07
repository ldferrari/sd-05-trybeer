import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import LoginPage from './pages/general/LoginPage';
<<<<<<< HEAD
import ClientProduct from './pages/client/ClientProduct';
import ClientProfile from './pages/client/ClientProfile';
import ClientOrder from './pages/client/ClientOrder';
=======
import ClientProfilePage from './pages/client/ClientProfilePage';
>>>>>>> 167b9c2d6be4395ced89ffcc1eaa8462f8ae8ae9

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
<<<<<<< HEAD
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/products" component={ ClientProduct } />
        <Route path="/profile" component={ ClientProfile } />
        <Route path="/orders" component={ ClientOrder } />
=======
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/">
          <LoginPage />
        </Route>
>>>>>>> 167b9c2d6be4395ced89ffcc1eaa8462f8ae8ae9
      </Switch>
    </div>
  );
}

export default App;
