import React from 'react';
import { useState, useContext, useEffect } from 'react';
import TrybeerContext from '../../context/TrybeerContext';
import { saveProductsMore, saveProductsLess } from '../../services/localStorage';

function EachProduct(props) {
  const { product, index, key } = props;
  const [countProduct, setCountProduct] = useState(0);
  const { totalPrice, setTotalPrice } = useContext(TrybeerContext);

  const oneLess = async () => {
    if (!(countProduct <= 0)) {
      setCountProduct(countProduct - 1);
      setTotalPrice(totalPrice - product.price);
      saveProductsLess(product);
      setTotalPrice(totalPrice - Number(product.price));
      // cartStorage();
    }
  };
  const oneMore = async () => {
    setCountProduct(countProduct + 1);
    setTotalPrice(totalPrice + Number(product.price));
    saveProductsMore(product);
    localStorage.setItem('totalPrice', totalPrice + Number(product.price))
    // cartStorage();
  };

  // const cartStorage = () => {
  //   // pensando na primeira vez que cria o cart
  //   if (localStorage.getItem('cart') === null) {
  //     const cart = {

  //     }
  //     localStorage.setItem('cart');
  //   // todas as outras vezes, apenas acumula
  //   // [index] e ...
  //   } else {

  //   }
  // };
  // chave cart deve conter a seguinte estrutura:
  // {
  //   "nameProduct": "name",
  //   "qty": 0,
  // }
  // chave totalPrice = totalPrice actual

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