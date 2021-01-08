import React, { useEffect, useContext, useState } from 'react';
// import ClientContext from '../../context/client/ClientContext';

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
      <div>
        <button 
          type="button"
          data-testid={ `${product.id}-product-minus` }
          // onClick={ () => diminuir unidade e remover do carrinho }
        >
          -
        </button>
        <div data-testid={ `${product.id}-product-qtd` }>
          Quantidade
        </div>
        <button 
          data-testid={ `${product.id}-product-plus` }
          type="button"
          // onClick={ () => aumentar unidade e adicionar ao carrinho }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProdCard;
