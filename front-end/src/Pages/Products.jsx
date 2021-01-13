import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Products({ history }) {
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Produtos <br/>
      <Link to="/checkout">
        checkout
      </Link>
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
