import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import ClientProductPage from './pages/client/ClientProductPage';
import ClientProfilePage from './pages/client/ClientProfilePage';
import LoginPage from './pages/general/LoginPage';
import ClientOrderPage from './pages/client/ClientOrderPage';
import AdminProfilePage from './pages/admin/AdminProfilePage';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/orders" component={ ClientOrderPage } />
        {/*         trocar rota admin/orders  */}
        <Route path="/admin/profile" component={ AdminProfilePage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/products" component={ ClientProductPage } />
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/orders" component={ ClientOrderPage } />
        <Route path="/checkout" component={ ClientOrderPage } />
        {/*         trocar rota checkout  */}
        <Route path="/" component={ () => <Redirect to="/login" /> } />
      </Switch>
    </div>
  );
}

export default App;
