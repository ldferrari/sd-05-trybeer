import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../../context/TrybeerContext';
import { saveProductsMore, saveProductsLess } from '../../services/localStorage';

function EachProduct(props) {
  const { product, index } = props;
  const initialCount = 0;
  const [countProduct, setCountProduct] = useState(initialCount);
  const { totalPrice, setTotalPrice } = useContext(TrybeerContext);

  const oneLess = async () => {
    if (!(countProduct <= initialCount)) {
      setCountProduct(countProduct - 1);
      setTotalPrice(totalPrice - product.price);
      saveProductsLess(product);
      setTotalPrice(totalPrice - Number(product.price));
    }
  };
  const oneMore = async () => {
    setCountProduct(countProduct + 1);
    setTotalPrice(totalPrice + Number(product.price));
    saveProductsMore(product);
    localStorage.setItem('totalPrice', totalPrice + Number(product.price));
  };

  return (
    <div className="eachCard">
      <p data-testid={ `${index}-product-price` }>
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
          product.price,
        )}
      </p>
      <img
        data-testid={ `${index}-product-img` }
        src={ product.url_image }
        alt=""
        width="100"
        height="60"
      />
      <p key={ product.id } data-testid={ `${index}-product-name` }>
        {product.name}
      </p>
      <div className="controlQty">
        <button
          type="button"
          key={ product.id }
          data-testid={ `${index}-product-minus` }
          onClick={ () => oneLess() }
        >
          -
        </button>
        <p data-testid={ `${index}-product-qtd` } id={ `${index}-price` }>
          {countProduct}
        </p>
        <button
          type="button"
          key={ product.id }
          data-testid={ `${index}-product-plus` }
          onClick={ () => oneMore() }
        >
          +
        </button>
      </div>
    </div>
  );
}

EachProduct.propTypes = {
  product: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

export default EachProduct;
