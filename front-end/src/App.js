import './App.css';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsAct } from '../src/Redux/Actions/index';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';

function App({ ProductsAPI }) {
  useEffect(() => {
    ProductsAPI();
  }, [ProductsAPI]);

  return (
    <div className="App">
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  ProductsAPI: () => dispatch(getProductsAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
