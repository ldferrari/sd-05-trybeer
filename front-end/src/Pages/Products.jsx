import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import Helpers from '../Helper/index';
import Restrict from '../Components/Restrict';

import { getProducts } from '../Redux/Services';

const INITIAL_VALUE = 0;

function Products({ history, isLoading }) {
  const [redirect, setRedirect] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(Helpers.getCartInfo()?.total || INITIAL_VALUE);

  useEffect(() => {
    getProducts()
      .then((productsArray) => {
        setProducts(productsArray);
      });
  }, []);

  const onRefresh = () => {
    const t = Helpers.getCartInfo()?.total || INITIAL_VALUE;
    setTotal(t);
  }

  if (isLoading) return <p>Loading...</p>;
  if (redirect) return <Redirect to={ redirect } />;

  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      <h1>Produtos</h1>
      {products.map((product) => (
        <ProductCard key={ product.id } product={ product } onRefresh={ onRefresh } />
      ))}
      <button
        type="button"
        disabled={ total === 0 }
        data-testid="checkout-bottom-btn"
        onClick={ () => setRedirect('/checkout') }
        to="/checkout"
      >
        Ver Carrinho
        <p on data-testid="checkout-bottom-btn-value">
          {`R$ ${Helpers.transformPrice(total)}`}
        </p>
      </button>
    </Restrict>
  );
}

Products.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cart: PropTypes.shape(Object).isRequired,
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

export default Products;
