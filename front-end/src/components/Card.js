import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { index, name, price } = props;
  const priceReais = price.replace('.', ',');

  return (
    <section className="product-card">
      <h3 data-testid={ `${index}-product-name` }>{name}</h3>
      <span data-testid={ `${index}-product-price` }>{`R$ ${priceReais}`}</span>
      <button type="button">+</button>
      <button type="button">-</button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
