import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import CardOrderDetails from '../../components/CardOrdersDetails';
import { getSaleDetail, postStatusDelivered } from '../../services/requestAPI';

import propTypes from 'prop-types';

const OrderAdminDetails = (props) => {
  const { id } = props.match.params;
  const [delivered, setDelivered] = useState(false);
  const [sale, setsale] = useState([]);
  const [falha, setFalha] = useState('');
  const token = localStorage.getItem('token');
  const {
    history,
  } = props;
  const two = 2;
  async function fetchSale() {
    try {
      const { data } = await getSaleDetail(token, id);
      setsale(data);
      if (data.length > 0) {
        setDelivered(data[0].status);
      }
    } catch (error) {
      console.log(error);
    }
    return 'true';
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login');
    }
    fetchSale();
  }, [history]);

  const handleSubmit = async () => {
    const ok = await postStatusDelivered(token, id);
    console.log("Look me move OK", ok);
    if(!ok.data.message) {
      return await fetchSale();
    }
    setFalha('Algo deu errado!');
  }

  return (
    <div className="Orders">
      <div className="pedido">
        <span>{ falha }</span>
        <h2 className="checkoutitle" data-testid="order-number">{`Pedido ${id}`} - <span data-testid="order-status">{`${sale.length ? delivered : ''}`}</span></h2>
        <div className="cartItems">
          { sale.map((item, index) => <CardOrderDetails key={ item.name } item={ item } index={ index } />) }
        </div>
        <h2>{`Total: R$ ${sale.reduce((acc, cur) => acc + cur.quantity * cur.price, 0).toFixed(two).replace('.', ',')}`}</h2>
      </div>
      { delivered === 'Pendente' && <button type="button" onClick={handleSubmit}>Marcar como entregue</button>}
      <Footer />
    </div>
  );
};

export default OrderAdminDetails;

OrderAdminDetails.propTypes = {
  params: propTypes.instanceOf(Object).isRequired,
};
