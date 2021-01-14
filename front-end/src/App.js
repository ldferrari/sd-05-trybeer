import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/general/RegisterPage';
import ClientProductPage from './pages/client/ClientProductPage';
import ClientProfilePage from './pages/client/ClientProfilePage';
import LoginPage from './pages/general/LoginPage';
import ClientMeusPedidos from './pages/client/ClientMeusPedidos';
// import AdminPedidosPendentes from './pages/admin/AdminPedidosPendentes';
// import ClientOrderPage from './pages/client/ClientOrderPage';
import AdminOrderPage from './pages/admin/AdminOrderPage';
// import './css/app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/orders" component={ AdminOrderPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/products" component={ ClientProductPage } />
        <Route path="/profile" component={ ClientProfilePage } />
        <Route path="/orders" component={ ClientMeusPedidos } />
        <Route path="/checkout" component={ ClientMeusPedidos } />
        {/* <Route path="/teste" component={ ClientDetailsOrderPage } /> */}
        {/*         trocar rota checkout  */}
        <Route path="/" component={ () => <Redirect to="/login" /> } />
      </Switch>
    </div>
  );
}

export default App;
