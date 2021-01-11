import React from 'react';
import { useState, useContext, useEffect } from 'react';
import TrybeerContext from '../../context/TrybeerContext';

function EachProduct(props) {
  const { product, index, key } = props;
  const [countProduct, setCountProduct] = useState(0);
  const { totalPrice, setTotalPrice } = useContext(TrybeerContext);


  const oneLess = () => {
    if (!(countProduct <= 0)) {
      setCountProduct(countProduct - 1);
      setTotalPrice(totalPrice - product.price);
    }
  };
  const oneMore = () => {
    setCountProduct(countProduct + 1);
    setTotalPrice(totalPrice + Number(product.price))
  };

  return (
    <div className="eachCard">
      <p data-testid={`${index}-product-price`}>
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
          product.price
        )}
      </p>
      <img
        data-testid={`${index}-product-img`}
        src={product.url_image}
        alt=""
        width="100"
        height="60"
      />
      {/* FALTA: conectar a imagem com o images.tar.gz */}
      <p key={product.id} data-testid={`${index}-product-name`}>
        {product.name}
      </p>
      <div className="controlQty">
        <button key={product.id} data-testid={`${index}-product-minus`} onClick={() => oneLess()}>
          -
        </button>
        <p data-testid={`${index}-product-qtd`} id={`${index}-price`}>
          {countProduct}
        </p>
        <button key={product.id} data-testid={`${index}-product-plus`} onClick={() => oneMore()}>
          +
        </button>
      </div>
    </div>
  );
}

export default EachProduct;
