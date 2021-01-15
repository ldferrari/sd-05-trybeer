import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import Card from '../components/Card';
import { getAllProducts } from '../services/ApiTrybeer';

const Products = () => {
  const { productsList, setProductList, total } = useContext(TryBeerContext);
  const userData = JSON.parse(localStorage.getItem('user'));
  const token = userData && userData.token;

  useEffect(() => {
    getAllProducts(token)
      .then((products) => setProductList(products))
      .catch((err) => err);
  }, [setProductList, token]);

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title="TryBeer" />
      <section className="products-list">
        { productsList
          && productsList.map((product, index) => (
            <Card
              index={ index }
              key={ product.id }
              product={ product }
            />
          )) }
      </section>
      <Link to="/checkout">
        <button
          data-testid="checkout-bottom-btn"
          type="button"
          disabled={ !total }
        >
          Ver Carrinho
        </button>
      </Link>
      <span data-testid="checkout-bottom-btn-value">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(total)}
      </span>
    </section>
  );
};

export default Products;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
