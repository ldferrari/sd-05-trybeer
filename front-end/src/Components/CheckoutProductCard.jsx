import PropTypes from "prop-types";
import React from 'react';

const cssProvisorio = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '35%',
};
// Me falem se tinha melhor opção que usar várias divs, por favor, Paulo
function CheckoutProductCard({ item, i, triggerDelete }) {
  return (
    <div style={cssProvisorio}>
      <div data-testid={`${i}-product-qtd-input`}>{item.quantity}</div>
      <div data-testid={`${i}-product-name`}>{item.name}</div>
      <div data-testid={`${i}-product-total`}>
        R$ {item.quantity * item.price}
      </div>
      <div data-testid={`${i}-product-unit-price`}>(R$ {item.price} un)</div>
      <button onClick={() => triggerDelete(i)} data-testid={`${i}-removal-button`}>X</button>
    </div>
  );
}

CheckoutProductCard.propTypes = {
  i: PropTypes.number.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired,
  triggerDelete: PropTypes.func.isRequired
}

export default CheckoutProductCard;