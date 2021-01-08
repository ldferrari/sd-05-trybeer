import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsAct } from '../src/Redux/Actions/index';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';

function App({ ProductsAPI }) {
  useEffect(() => {
    ProductsAPI();
  }, [ProductsAPI]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  ProductsAPI: () => dispatch(getProductsAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
