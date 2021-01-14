import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import Helpers from '../Helper/index';

const toFixedParam = 2;


function Products({
  products, totalPrice, history, userData, isLoading,
}) {
  const [redirect, setRedirect] = useState(null);
  const { user } = userData;
  if (isLoading) return <p>Loading...</p>;
  const totalPriceLocal = localStorage.getItem('totalPrice');
  if (redirect) return <Redirect to={ redirect } />;
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      <h1>Produtos</h1>
      {products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))}
      <button
        type="button"
        disabled={ !totalPrice && !totalPriceLocal }
        data-testid="checkout-bottom-btn"
        onClick={ () => setRedirect('/checkout') }
        to="/checkout"
      >
        Ver Carrinho
        <p on data-testid="checkout-bottom-btn-value">
          {`R$ ${Helpers.transformPrice(parseFloat(totalPriceLocal).toFixed(toFixedParam) || totalPrice.toFixed(toFixedParam))}`}
        </p>
      </button>
    </div>
  );
}

Products.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  products: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
  totalPrice: state.productsRequestReducer.totalPrice,
});

export default connect(mapStateToProps)(Products);
