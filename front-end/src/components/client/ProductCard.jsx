import React, { useEffect, useContext, useState } from 'react';
// import ClientContext from '../../context/client/ClientContext';
import QuantityButton from '../../components/client/QuantityButton';

const ProdCard = (props) => {
  
  const { product } = props;

  return (
    <div key={ product.id }>
      <img 
        src={ product.url_image }
        data-testid={ `${product.id}-product-img` }
        alt={product.name}
      />
      <div data-testid={ `${product.id}-product-name` }>
        { product.name }
      </div>
      <div data-testid={ `${product.id}-product-price` }>
        R$ { product.price }               
      </div>
      <QuantityButton />
    </div>
  )
}

export default ProdCard;
