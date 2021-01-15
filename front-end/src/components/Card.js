import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import TryBeerContext from '../context/TryBeerContext';
import { addToCart, removeFromCart } from '../services/localStorage';

function Card(props) {
  const { product, index } = props;
  const reais = product.price.replace('.', ',');
  const { total, setTotal } = useContext(TryBeerContext);
  const zero = 0;
  const [quantity, setQuantity] = useState(zero);

  useEffect(() => {
    setTotal(parseFloat(localStorage.getItem('totalPrice')) || zero);
  }, [setTotal]);

  const addProduct = () => {
    if (quantity >= zero) {
      setQuantity(quantity + 1);
      localStorage.setItem('totalPrice', String(total + parseFloat(product.price)));
      setTotal(total + parseFloat(product.price));
      addToCart(product);
    }
  };

  const removeProduct = () => {
    if (quantity > zero) {
      setQuantity(quantity > zero ? quantity - 1 : zero);
      localStorage.setItem(
        'totalPrice',
        String(total > zero ? total - parseFloat(product.price) : zero),
      );
      setTotal(total > zero ? total - parseFloat(product.price) : zero);
      removeFromCart(product);
    }
  };

  return (
    <section className="product-card">
      <img
        data-testid={ `${index}-product-img` }
        src={ product.url_image }
        alt="Beer"
        width="100px"
      />
      <h3 data-testid={ `${index}-product-name` }>{product.name}</h3>
      <span data-testid={ `${index}-product-price` }>{`R$ ${reais}`}</span>
      <button
        data-testid={ `${index}-product-minus` }
        type="button"
        onClick={ () => removeProduct() }
      >
        -
      </button>
      <span
        data-testid={ `${index}-product-qtd` }
      >
        {quantity}
      </span>
      <button
        data-testid={ `${index}-product-plus` }
        type="button"
        onClick={ () => addProduct() }
      >
        +
      </button>
    </section>
  );
}

export default Card;

Card.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    url_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
