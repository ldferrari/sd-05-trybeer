import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import ClientProductPage from './pages/client/ClientProductPage';
import LoginPage from './pages/general/LoginPage';
import ClientProfilePage from './pages/client/ClientProfilePage';
import AdminProfilePage from './pages/admin/AdminProfilePage';
// import AdminSaleDetailsPage from './pages/admin/AdminSaleDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import ClientMeusPedidos from './pages/client/ClientMeusPedidosPage';
import AdminOrderPage from './pages/admin/AdminOrderPage';
import ClientCheckoutPage from './pages/client/ClientCheckoutPage';
import './css/client/app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/admin/orders/:id" component={ AdminSaleDetailsPage } /> */}
        <Route path="/admin/orders" component={ AdminOrdersPage } />
        <Route path="/admin/profile" component={ AdminProfilePage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/products" component={ ClientProductPage } />
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/orders" component={ ClientMeusPedidos } />
        <Route path="/checkout" component={ ClientCheckoutPage } />
        <Route path="/" component={ () => <Redirect to="/login" /> } />
      </Switch>
    </div>
  );
}

export default App;
