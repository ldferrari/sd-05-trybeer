import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Components/Header';

function Orders({ history }) {
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Meus pedidos
    </div>
  );
}

Orders.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Orders;
