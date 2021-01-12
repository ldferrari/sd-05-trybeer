import React from 'react';
import PropTypes from 'prop-types';
// import ClientContext from '../../context/client/ClientContext';
import QuantityButton from './QuantityButton';

const ProdCard = (props) => {
  
  const { product, index } = props;

  return (
    <div key={ product.id }>
      <img
        height='60px' 
        src={ product.url_image }
        data-testid={ `${index}-product-img` }
        alt={product.name}
      />
      <div data-testid={ `${index}-product-name` }>
        { product.name }
      </div>
      <div data-testid={ `${index}-product-price` }>
        <div>
          { `R$ ${product.price.toString().replace('.', ',')}` }
        </div>
      </div>
      <QuantityButton price={product.price} />
    </div>
  );
}

ProdCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProdCard;
