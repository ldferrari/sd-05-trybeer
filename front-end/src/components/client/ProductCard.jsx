import React from 'react';
import PropTypes from 'prop-types';
// import ClientContext from '../../context/client/ClientContext';
import QuantityButton from './QuantityButton';

const ProdCard = (props) => {
  const { product } = props;
  return (
    <div key={ product.id }>
      <img
        src={ product.url_image }
        data-testid={ `${product.id}-product-img` }
        alt={ product.name }
      />
      <div data-testid={ `${product.id}-product-name` }>
        { product.name }
      </div>
      <div data-testid={ `${product.id}-product-price` }>
        R$
        { product.price }
      </div>
      <QuantityButton />
    </div>
  );
}

ProdCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProdCard;
