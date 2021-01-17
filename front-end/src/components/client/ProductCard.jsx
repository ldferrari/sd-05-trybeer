import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';

const ProdCard = (props) => {
  const { product, index } = props;
  return (
    <div key={ product.id } className="card-body">
      <div className="divImage">
        <img
          height="70px"
          src={ product.url_image }
          data-testid={ `${index}-product-img` }
          className="card-image"
          alt={ product.name }
        />
      </div>
      <div data-testid={ `${index}-product-name` } className="cart-name">
        { product.name }
      </div>
      <div data-testid={ `${index}-product-price` } className="cart-price">
        <div>
          { `R$ ${product.price.toString().replace('.', ',')}` }
        </div>
      </div>
      <QuantityButton
        index={ index }
        id={ product.id }
        price={ product.price }
        name={ product.name }
      />
    </div>
  );
};

ProdCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.string.isRequired,
};

export default ProdCard;
