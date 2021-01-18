import PropTypes from 'prop-types';
import React from 'react';
import Restrict from '../Components/Restrict';
import Header from '../Components/Header';

function Orders({ history }) {
  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      Cliente - Meus pedidos
    </Restrict>
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
