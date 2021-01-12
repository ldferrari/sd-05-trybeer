import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Components/Header';

function Checkout({ history }) {
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Checkout
    </div>
  );
}

Checkout.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Checkout;
