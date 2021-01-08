import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsAct } from '../src/Redux/Actions/index';
import Products from './Pages/Products';

function App({ ProductsAPI, products }) {
  useEffect(() => {
    ProductsAPI();
  }, [ProductsAPI]);

  return (
    <div className="App">
      <Products products={products} />
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
