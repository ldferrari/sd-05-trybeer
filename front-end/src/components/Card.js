import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from '../context/TryBeerContext';

function Card(props) {
  const {
    index, image, name, price,
  } = props;
  const reais = price.replace('.', ',');
  const { total, setTotal } = useContext(TryBeerContext);
  const zero = 0;
  const [quantity, setQuantity] = useState(zero);

  useEffect(() => {
    setTotal(parseFloat(localStorage.getItem('totalPrice')) || zero);
  }, [setTotal]);

  const addProduct = () => {
    if (quantity >= zero) {
      setQuantity(quantity + 1);
      localStorage.setItem('totalPrice', String(total + parseFloat(price)));
      setTotal(total + parseFloat(price));
    }
  };

  const removeProduct = () => {
    if (quantity > zero) {
      setQuantity(quantity > zero ? quantity - 1 : zero);
      localStorage.setItem(
        'totalPrice',
        String(total > zero ? total - parseFloat(price) : zero),
      );
      setTotal(total > zero ? total - parseFloat(price) : zero);
    }
  };

  return (
    <section className="product-card">
      <img
        data-testid={ `${index}-product-img` }
        src={ image }
        alt="Beer"
        width="100px"
      />
      <h3 data-testid={ `${index}-product-name` }>{name}</h3>
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
