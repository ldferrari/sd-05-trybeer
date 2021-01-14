import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';
// import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import OrderItem from '../../components/orderItems';
import { postGetTheOrder } from '../../services/requestAPI';

export default function OrderDetails(props) {
  // const { order, index } = props;
  // id->req params?
  const zero = 0;
  const dois = 2;
  const tempoEspera = 3000;
  const cartSum = orderHere
    .reduce((acc, cv) => acc + cv.price * cv.quantity, zero)
    .toFixed(dois);

  // const {
  //   id, addressNumber, addressStreet, value, status,
  // } = order;
  const [orderHere, setOrder] = useState([]);
  // const theToken = localStorage.getItem('token');
  const { id } = useParams();

  useEffect(() => {
    const { history } = props;
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
    async function fetchOrder() {
      const { data } = await postGetTheOrder(token, id);
      setOrder(data);
    }
    fetchOrder();
  }, [props]);

  return (
    <div>
      <Header>Detalhes de Pedido</Header>
      <h4 data-testid="order-number">
        { id }
      </h4>
      <h4 data-testid="order-date">
        { orderHere.sale_date }
      </h4>
      <div>
        <div className="legenda">
          <p>QUANTIDADE</p>
          <p>PRODUTO</p>
          <p>PREÇO</p>
          <p>TOTAL</p>
          <p>EXCLUIR  </p>
        </div>
        <div className="cartItems">
          {
          orderHere
            .map((item, index) => <OrderItem key={ item.id } item={ item } index={ index } />)
          }
        </div>
        <p data-testid="order-total-value" className="total">
        { `TOTAL: R$ ${cartSum.toString().replace('.', ',')}` }
        </p>
      </div>
      {/* <h5 data-testid={ `${index}-order-address` }>{ `${addressStreet}, ${addressNumber}` }</h5> */}
      <Footer />
    </div>
  );
}

// OrderDetails.propTypes = {
//   order: propTypes.instanceOf(Object).isRequired,
//   index: propTypes.number.isRequired,
// };
