import React, { useEffect, useState } from 'react';
import { getProductById } from '../../services/fetch';
import PropTypes from 'prop-types';

export default function AdminProductsList({ sale }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById(sale.product_id).then((response) => setProduct(response[0]));
  }, []);

  return (
    <li>{sale.quantity} - {product.name} - R$ <span>{product.price}</span></li>
  )
};

AdminProductsList.propTypes = {
  sale: PropTypes.object.isRequired,
};
