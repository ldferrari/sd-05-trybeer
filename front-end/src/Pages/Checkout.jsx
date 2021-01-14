import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';

function Checkout({ cart, history }) {
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      <h1>Checkout</h1>
      <h3>Produtos</h3>
      {cart.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))}
      <h3>Endereço</h3>
      <Link to="/">Finalizar Pedido</Link>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.productsRequestReducer.cart,
});

export default connect(mapStateToProps)(Checkout);
