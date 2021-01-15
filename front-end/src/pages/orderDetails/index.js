import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import propTypes from 'prop-types';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
// import { Link } from 'react-router-dom';
import OrderItem from '../../components/orderItems';
import { postGetTheOrder } from '../../services/requestAPI';

export default function OrderDetails(props) {
  const [orderHere, setOrder] = useState([]);
  const [dia, setDia] = useState('0000-00-00');
  // const theToken = localStorage.getItem('token');
  const { id } = useParams();

  const zero = 0;
  const dois = 2;
  const cartSum = orderHere
    .reduce((acc, cv) => acc + cv.price * cv.quantity, zero)
    .toFixed(dois);

  useEffect(() => {
    const { history } = props;
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
    async function fetchOrder() {
      const temp = await postGetTheOrder(token, id);
      const { data } = temp;
      setOrder(data);
      setDia(data[0].sale_date);
    }
    fetchOrder();
  }, [props, id]);

  const dataCerta = !dia ? '' : dia.match(/\d{4}-(\d{2})-(\d{2})/);

  return (
    <div>
      <Header>Detalhes de Pedido</Header>
      <div className="detailsHeader">
        <h4 data-testid="order-number">
          { `Pedido ${id}` }
        </h4>
        <h4 data-testid="order-date">
          { `${dataCerta[2]}/${dataCerta[1]}` }
        </h4>
      </div>
      <div>
        <div className="legenda">
          <p>QUANTIDADE</p>
          <p>PRODUTO</p>
          <p>PREÇO</p>
          <p>TOTAL</p>
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
      <Footer />
    </div>
  );
}

OrderDetails.propTypes = { history: propTypes.instanceOf(Object).isRequired };
// OrderDetails.propTypes = {
//   order: propTypes.instanceOf(Object).isRequired,
//   index: propTypes.number.isRequired,
// };
