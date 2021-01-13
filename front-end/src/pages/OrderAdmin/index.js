import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import AppContext from '../../context/AppContext';
import Footer from '../../components/footer';
import CardOrder from '../../components/CardOrders';

const OrderAdmin = () => {
  const [allOrders, setAllOrders] = useState([]);
  // const [alertCompraFinalizada, setAlertCompraFinalizada] = useState('');
  // const theToken = localStorage.getItem("token");
  const logged = localStorage.getItem('token');
  // const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    const pegaAPI = () => [
      {
        id: 1, addressNumber: 2, addressStreet: 'minha rua', value: 10.80, status: 'Pendente',
      },
      {
        id: 2, addressNumber: 2, addressStreet: 'minha rua', value: 10.80, status: 'Pendente',
      },
    ];
    setAllOrders(pegaAPI);
  },
  []);

  if (!logged) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Orders">
      <div className="pedido">
        <h2 className="checkoutitle">Produtos no carrinho:</h2>
        <div className="legenda">
          <p>QUANTIDADE</p>
          <p>PRODUTO</p>
          <p>PREÇO</p>
          <p>TOTAL</p>
          <p>EXCLUIR  </p>
        </div>
        <div className="cartItems">
          {
          allOrders
            .map((item, index) => <CardOrder key={ item.id } order={ item } index={ index } />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdmin;

/* OrderAdmin.propTypes = {
  history: propTypes.func.isRequired,
}; */
