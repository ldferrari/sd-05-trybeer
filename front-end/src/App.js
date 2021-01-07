import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsAct } from '../src/Redux/Actions/index';
import Header from './Components/Header';

function App({ProductsAPI}) {
  useEffect(() => {
    ProductsAPI();
  }, [ProductsAPI]);
  return (
    <div className="App">
      <Header></Header>
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