import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';

import Footer from '../../components/footer';
import CardOrderDetails from '../../components/CardOrdersAdminDetails';
import { getSaleDetail, postStatusDelivered } from '../../services/requestAPI';

const OrderAdminDetails = (props) => {
  const { match: { params: { id } } } = props;
  const [delivered, setDelivered] = useState(false);
  const [sale, setsale] = useState([]);
  const [falha, setFalha] = useState('');
  const token = localStorage.getItem('token');
  const zero = 0;
  const {
    history,
  } = props;

  async function fetchSale() {
    try {
      const { data } = await getSaleDetail(token, id);
      setsale(data);
      if (data.length > zero) {
        setDelivered(data[0].status);
      }
    } catch (error) {
      console.log(error);
    }
    return 'true';
  }

  const memoFetchSale = useCallback(fetchSale, [token, id]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login');
    }
    memoFetchSale();
  }, [history, token, id, memoFetchSale]);

  const handleSubmit = async () => {
    const ok = await postStatusDelivered(token, id);

    if (!ok.data.message) {
      return fetchSale();
    }
    return setFalha('Algo deu errado!');
  };

  return (
    <div className="Orders">
      <div className="pedido">
        <span>{ falha }</span>
        <h2 className="checkoutitle">{`Pedido ${id} - ${sale.length ? delivered : ''}`}</h2>
        <div className="cartItems">
          { sale.map((item, index) => (
            <CardOrderDetails key={ item.name } item={ item } index={ index } />
          )) }
        </div>
        <h2>{`Total: R$ ${sale.reduce((acc, cur) => acc + cur.quantity * cur.price, zero)}`}</h2>
      </div>
      { delivered === 'Pendente' && <button type="button" onClick={ handleSubmit }>Marcar como entregue</button>}
      <Footer />
    </div>
  );
};

export default OrderAdminDetails;

OrderAdminDetails.propTypes = {
  match: propTypes.instanceOf(Object).isRequired,
  history: propTypes.instanceOf(Object).isRequired,
};
