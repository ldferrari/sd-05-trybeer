import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';
import ClientMenu from '../../components/client/ClientMenu';
import CheckoutCard from '../../components/checkoutCard';
import '../../css/client/checkout.css';
import { createNewSale } from '../../services/fetch';

function Checkout() {
  const initialState = 0;
  const [isLogged, setIsLogged] = useState(true);
  const [street, setStreet] = useState('');
  const [houseNum, setHouseNum] = useState(initialState);
  const [statusSale, setStatusSale] = useState(false);
  const { totalPrice } = useContext(TrybeerContext);

  const products = JSON.parse(localStorage.getItem('cart'));
  const user = JSON.parse(localStorage.getItem('user'));
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() === initialState ? '01' : now.getMonth();
  const day = now.getDate();
  const date = `${day}/${month}/${year}`;

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  const handleStreetInput = (input) => {
    setStreet(input);
    // tb mandar para bd?
  };
  const handleHouseNumInput = (input) => {
    setHouseNum(input);
    // tb mandar para bd?
  };

  const handleResult = (result) => {
    const time = 1000;
    if (result.message === 'Created') {
      document.getElementById('sucess').innerHTML = 'Compra realizada com sucesso!';
      setTimeout(() => { setStatusSale(true); }, time);
    }
  };

  return (
    <div>
      <ClientMenu data-testid="top-title" title="Finalizar pedido" />
      <h3>Produtos</h3>
      {!totalPrice && <h2>Não há produtos no carrinho</h2>}
      {totalPrice && (
        <div className="orders-list">
          { products.map((item, index) => (
            <CheckoutCard item={ item } index={ index } key={ item } />
          )) }
        </div>
      )}
      <p data-testid="order-total-value">
        Total:
        {' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(totalPrice)}
      </p>
      <div className="address">
        <h3>Endereço</h3>
        <label htmlFor="street">
          Rua:
          <input
            data-testid="checkout-street-input"
            type="input"
            id="street"
            onChange={ (e) => handleStreetInput(e.target.value) }
          />
        </label>
        <label htmlFor="house">
          Número da casa:
          <input
            data-testid="checkout-house-number-input"
            type="input"
            id="house"
            onChange={ (e) => handleHouseNumInput(e.target.value) }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="checkout-finish-btn"
        disabled={ totalPrice === initialState || houseNum === initialState || street === '' }
        // onClick={() => done()}
        onClick={ () => {
          createNewSale(user.email, totalPrice, street, houseNum, date, products)
            .then((result) => handleResult(result));
        } }
      >
        Finalizar pedido
      </button>
      <div id="sucess" />
      {statusSale && <Redirect to="/products" />}
      {!isLogged && <Redirect to="/login" />}
    </div>
  );
}

export default Checkout;

// email,
//   totalPrice,
//   address,
//   addressNumber,
//   saleDate,
//   products
