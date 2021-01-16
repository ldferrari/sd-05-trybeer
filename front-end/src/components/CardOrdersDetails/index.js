import React from 'react';
import propTypes from 'prop-types';
import './index.css';

export default function CardOrderDetails(props) {
  const {
    item,
    index,
  } = props;

  const two = 2;
  return (
    <div className="cartItem" key={ item.name }>
      <p data-testid={ `${index}-product-qtd` }>{ item.quantity }</p>
      <p data-testid={ `${index}-product-name` }>{ item.name }</p>
      <p data-testid={ `${index}-order-unit-price` }>
        {`(R$ ${item.price.toString().replace('.', ',')})`}
      </p>
      <p data-testid={ `${index}-product-total-value` }>
        { `R$ ${(item.price * item.quantity).toFixed(two).replace('.', ',')}` }
      </p>
    </div>
  );
}

CardOrderDetails.propTypes = {
  item: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
};
