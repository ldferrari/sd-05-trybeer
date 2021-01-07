import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsAct } from '../src/Redux/Actions/index';

function App({ProductsAPI}) {
  useEffect(() => {
    ProductsAPI();
  }, [ProductsAPI]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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