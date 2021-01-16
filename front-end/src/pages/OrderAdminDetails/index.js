import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';
import Footer from '../../components/footer';
import CardOrderDetails from '../../components/CardOrdersDetails';
import { getSaleDetail, postStatusDelivered } from '../../services/requestAPI';

import AdminSideBar from '../../components/admin sidebar';

const OrderAdminDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [delivered, setDelivered] = useState(false);
  const [sale, setsale] = useState([]);
  const [falha, setFalha] = useState('');
  const token = localStorage.getItem('token');
  const {
    history,
  } = props;
  const zero = 0;
  const two = 2;
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

  const memoFetch = useCallback(fetchSale, [token, id]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login');
    }
    memoFetch();
  }, [history, memoFetch]);

  const handleSubmit = async () => {
    const ok = await postStatusDelivered(token, id);
    if (!ok.data.message) {
      return fetchSale();
    }
    return setFalha('Algo deu errado!');
  };

  return (
    <div>
      <div className="Orders" style={ { display: 'flex', 'align-items': 'stretch' } }>
        <AdminSideBar />
        <div className="pedido" style={ { display: 'flex', 'align-items': 'start' } }>
          <span>{ falha }</span>
          <h2 className="checkoutitle" data-testid="order-number">
            {
              `Pedido ${id}`
            }
            -
            <span data-testid="order-status">{ `${sale.length ? delivered : ''}` }</span>
          </h2>
          <div className="cartItems">
            { sale.map((item, index) => (
              <CardOrderDetails key={ item.name } item={ item } index={ index } />
            )) }
          </div>
          <h2 data-testid="order-total-value">{`Total: R$ ${sale.reduce((acc, cur) => acc + cur.quantity * cur.price, zero).toFixed(two).replace('.', ',')}`}</h2>
        </div>
        { delivered === 'Pendente' && <button data-testid="mark-as-delivered-btn" type="button" onClick={ handleSubmit }>Marcar como entregue</button>}
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdminDetails;

OrderAdminDetails.propTypes = {
  params: propTypes.instanceOf(Object).isRequired,
  history: propTypes.instanceOf(Object).isRequired,
  match: propTypes.instanceOf(Object).isRequired,
};
