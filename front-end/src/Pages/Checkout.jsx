import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Header from './Header';
import ProductCard from '../Components/ProductCard'

function Checkout({ cart }) {
  return (
    <div>
      {/*<Header />*/}
      <h1>Checkout</h1>
      <h3>Produtos</h3>
      {cart.map((product, key) =>
        <ProductCard
          key={key}
          product={product}
        />)}
      <h3>Endereço</h3>
      <Link to='/'>Finalizar Pedido</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.productsReducer.cart,
});

export default connect(mapStateToProps)(Checkout);