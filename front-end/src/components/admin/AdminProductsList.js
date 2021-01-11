import React, { useEffect, useState, useContext } from 'react';
import { getProductById } from '../../services/fetch';
import PropTypes from 'prop-types';
import TrybeerContext from '../../context/TrybeerContext';

export default function AdminProductsList({ sale }) {
  const [product, setProduct] = useState([]);
  const { setTotalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    setTotalPrice(0);
    getProductById(sale.product_id).then((response) => setProduct(response[0]) || setTotalPrice((current) => current + (response[0].price) * sale.quantity));
  }, []);

  return (
    <li>{sale.quantity} - {product.name} - R$ <span>{product.price}</span></li>
  )
};

AdminProductsList.propTypes = {
  sale: PropTypes.object.isRequired,
};
