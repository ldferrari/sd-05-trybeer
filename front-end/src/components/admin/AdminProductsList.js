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
  }, [sale.product_id, sale.quantity, setTotalPrice]);

  const two = 2;

  if (!product.price) return <div>Carregando...</div>;

  return (
    <li>
      <span data-testid={ `${index}-product-qtd` }>{sale.quantity}</span>
      -
      <span data-testid={ `${index}-product-name` }>{product.name}</span>
      -
      <span data-testid={ `${index}-order-unit-price` }>
        { `(R$ ${product.price.replace('.', ',')})` }
      </span>
      -
      <span data-testid={ `${index}-product-total-value` }>
        { `R$ ${((sale.quantity * product.price).toFixed(two)).replace('.', ',')}` }
      </span>
    </li>
  );
}

AdminProductsList.propTypes = {
  sale: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    product_id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
};
