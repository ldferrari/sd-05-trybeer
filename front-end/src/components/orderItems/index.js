import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const OrderItem = (props) => {
  const { item, index } = props;

  const two = 2;
  return (
    <div className="cartItem" key={ item.name }>
      <p data-testid={ `${index}-product-qtd` }>{ item.quantity }</p>
      <p data-testid={ `${index}-product-name` }>{ item.name }</p>
      <p data-testid={ `${index}-product-unit-price` }>
        {`(R$ ${item.price.toString().replace('.', ',')} un)`}
      </p>
      <p data-testid={ `${index}-product-total-value` }>
        { `R$ ${(item.price * item.quantity).toFixed(two).replace('.', ',')}` }
      </p>
    </div>
  );
};

export default OrderItem;

OrderItem.propTypes = {
  item: PropTypes.shape({
    // id: PropTypes.number,
    quantity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    total_price: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
