import React from 'react';
import Header from '../Components/Header';

function Orders(props) {
  return (
    <div>
      <Header pathname={props.history.location.pathname} />
      Cliente - Meus pedidos
    </div>
  );
}

export default Orders;