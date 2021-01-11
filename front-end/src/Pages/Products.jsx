import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Components/Header';

function Products({ history }) {
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Produtos
    </div>
  );
}

Products.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default Products;
