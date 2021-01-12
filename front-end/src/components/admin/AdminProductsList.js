import React, { useEffect, useState, useContext } from 'react';
import { getProductById } from '../../services/fetch';
import PropTypes from 'prop-types';
import TrybeerContext from '../../context/TrybeerContext';

export default function AdminProductsList({ sale, index }) {
  const [product, setProduct] = useState([]);
  const { setTotalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    setTotalPrice(0);
    getProductById(sale.product_id).then((response) => setProduct(response[0]) || setTotalPrice((current) => current + (response[0].price) * sale.quantity));
  }, []);

  return (
    <li>
      <span data-testid={`${index}-product-qtd`}>{sale.quantity}</span>
       - 
      <span data-testid={`${index}-product-name`}>{product.name}</span>
       - R$ 
       <span data-testid={`${index}-order-unit-price`}>{product.price}</span>
       -
      <span data-testid={`${index}-product-total-value`}>{(sale.quantity * product.price).toFixed(2)}</span>
    </li>
  )
};

AdminProductsList.propTypes = {
  sale: PropTypes.object.isRequired,
};
