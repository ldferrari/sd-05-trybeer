import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';

export default function AdminProductsList({ sale, index }) {
  const [product, setProduct] = useState([]);
  const { setTotalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    const initialPrice = 0;
    setTotalPrice(initialPrice);
    getProductById(sale.product_id)
      .then((r) => setProduct(r[0]) || setTotalPrice((cur) => cur + (r[0].price) * sale.quantity));
  }, []);

  const two = 2;

  return (
    <li>
      <span data-testid={ `${index}-product-qtd` }>{sale.quantity}</span>
      -
      <span data-testid={ `${index}-product-name` }>{product.name}</span>
      - R$
      <span data-testid={ `${index}-order-unit-price` }>{product.price}</span>
      -
      <span data-testid={ `${index}-product-total-value` }>{(sale.quantity * product.price).toFixed(two)}</span>
    </li>
  );
}

AdminProductsList.propTypes = {
  sale: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};
