import React, { useEffect, useContext, useState } from 'react';
// import ClientContext from '../../context/client/ClientContext';
import QuantityButton from '../../components/client/QuantityButton';

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
  )
}

export default ProdCard;
