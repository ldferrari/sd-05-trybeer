import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import products from '../mock_data/productsCart';

export default function Products() {
  const index = 0;
  const handleClick = (e) => {
    e.preventDefault();
    products[0].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(products));
    // localStorage.setItem('totalPrice', JSON.stringify(products[0].quantity * products[0].price))
  };

  return (
    <>
      <Header title="TryBeer" />
      <button
        type="button"
        data-testid={ `${index}-product-plus` }
        onClick={ (e) => handleClick(e) }
      >
        +
      </button>
      <Link to="/checkout">
        <button
          type="button"
          data-testid="checkout-bottom-btn"
        >
          Ver carrinho
        </button>
      </Link>
    </>
  );
}
