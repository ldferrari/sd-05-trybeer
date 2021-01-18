import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import { fetchOrderId } from '../services/ApiTrybeer';

export default function OrderDetails(props) {
  const zero = 0;
  const decimals = 2;
  const {
    match: {
      params: { id },
    },
  } = props;
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState('');
  const [total, setTotal] = useState(zero);
  const userData = JSON.parse(localStorage.getItem('user'));
  const products = JSON.parse(localStorage.getItem('cart'));
  const email = userData && userData.user && userData.user.email;
  const token = userData && userData.token;

  useEffect(() => {
    fetchOrderId(email).then((sales) => {
      if (sales.length > zero) {
        setDate(sales[0].sale_date);
        setTotal(sales[0].total_price);
        setOrders(sales);
      }
    });
  }, [email]);

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title="Meus pedidos" />
      <section>
        <h2 data-testid="order-number">{`Pedido ${id}`}</h2>
        {orders.map((product, index) => (
          <section key={ product.id }>
            <h3 data-testid={ `${index}-product-name` }>
              {products[index] && products[index].name}
            </h3>
            <span>{products[index] && `R$ ${products[index].price}`}</span>
            <span data-testid={ `${index}-product-qtd` }>
              {products[index] && products[index].quantity}
            </span>
            <span data-testid={ `${index}-product-total-value` }>
              {products[index] && `R$ ${(products[index].price * products[index].quantity)
                .toFixed(decimals)
                .replace('.', ',')}`}
            </span>
          </section>
        ))}
      </section>
      <p data-testid="order-total-value">
        {`${new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(total)}`}
      </p>
      <p data-testid="order-date">
        {`${new Date(date).toLocaleDateString('pt-br', {
          day: '2-digit',
          month: '2-digit',
        })}`}
      </p>
    </section>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.number.isRequired,
  params: PropTypes.number.isRequired,
};
