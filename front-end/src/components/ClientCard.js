import React, { /* useContext */ } from 'react';
import PropTypes from 'prop-types';
// import TryBeerContext from '../context/TryBeerContext';

function ClientCard(props) {
  const { /* order, */ index } = props;
  // const reais = order.price.replace('.', ',');
  // const { total } = useContext(TryBeerContext);

  return (
    <section data-testid={ `${index}-order-card-container` }>
      <h3 data-testid={ `${index}-order-number` }>Pedido #1</h3>
      <span data-testid={ `${index}-order-total-value` }>
        { /* `R$ ${reais}` */ }
      </span>
      <span data-testid={ `${index}-order-date` }>Data</span>
    </section>
  );
}

export default ClientCard;

ClientCard.propTypes = {
  index: PropTypes.number.isRequired,
  // order: PropTypes.shape({
  //   orderNumber
  // }).isRequired,
};
