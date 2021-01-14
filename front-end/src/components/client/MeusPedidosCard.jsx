import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';

export default function MausPedidosCard(props) {
  const { index, data, preço } = props;
  return (
    <div data-testid={`${index}-order-card-container`} className="cardConteiner">
      <a data-testid={`${index}-order-number`}>pedido {index +1}</a>
      <a data-testid={`${index}-order-date`}>data da compra {data}</a>
      <a data-testid={`${index}-order-total-value`}>R$ {preço}</a> 
    </div>
  )
}
