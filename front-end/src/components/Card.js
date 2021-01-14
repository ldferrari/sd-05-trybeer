import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    index, image, name, price,
  } = props;
  const reais = price.replace('.', ',');

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
      <button data-testid={ `${index}-product-minus` } type="button">-</button>
      <span data-testid={ `${index}-product-qtd` }>0</span>
      <button data-testid={ `${index}-product-plus` } type="button">+</button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
