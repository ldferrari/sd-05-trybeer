import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientProfile from './pages/client/ClientProfile';
import Products from './pages/client/Products';
import Checkout from './pages/client/Checkout';
import Orders from './pages/client/Orders';
import OrdersDetails from './pages/client/OrdersDetails';
import AdminProfile from './pages/admin/AdminProfile';
import PendingOrders from './pages/admin/PendingOrders';
import AdminOrdersDetails from './pages/admin/AdminOrdersDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/profile" component={ ClientProfile } />
        <Route exact path="/products" component={ Products } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route exact path="/orders" component={ Orders } />
        <Route exact path="/orders/:orderNumber" component={ OrdersDetails } />
        <Route exact path="/admin/profile" component={ AdminProfile } />
        <Route exact path="/admin/orders" component={ PendingOrders } />
        <Route exact path="/admin/orders/:id" component={ AdminOrdersDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
