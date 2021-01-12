import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TrybeerContext from '../../context/TrybeerContext';
import ClientMenu from '../../components/client/ClientMenu';
import { CheckoutCard } from '../../components/checkoutCard';
import '../../css/client/checkout.css';
import { createNewSale } from '../../services/fetch'
import './products.css'

function Checkout() {
  const [isLogged, setIsLogged] = useState(true);
  const [street, setStreet] = useState('');
  const [houseNum, setHouseNum] = useState(0);
  const [statusSale, setStatusSale] = useState(false);
  const { totalPrice } = useContext(TrybeerContext);

  const products = JSON.parse(localStorage.getItem('cart'));
  const user = JSON.parse(localStorage.getItem('user'));
  const now = new Date();
  const year = now.getFullYear()
  const month = now.getMonth() === 0 ? '01' : now.getMonth();
  const day = now.getDate()
  const date = `${day}/${month}/${year}`


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
    if (result.message === 'Created') {
      document.getElementById('sucess').innerHTML = 'Compra realizada com sucesso!';
      setTimeout(() => {setStatusSale(true)}, 1000);
    } 
  }

  return (
    <div className="div-container-products yellow-background">
      <ClientMenu data-testid="top-title" title="Finalizar pedido" />
      <h2 className="white-text">Produtos</h2>
      {totalPrice === 0 && <h2>Não há produtos no carrinho</h2>}
      {totalPrice !== 0 && (
        <div className="orders-list info-container">
          {products.map((item, index) => <CheckoutCard item={item} index={index} />)}
        </div>
      )}
      <h2 data-testid="order-total-value" className="white-text">
        Total:{' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(totalPrice)}
      </h2>
      <div className="address-container">
        <h3 className="white-text">Endereço</h3>
          <input
          placeholder="Rua"
          className="input-layout"
            data-testid="checkout-street-input"
            type="input"
            id="street"
            onChange={(e) => handleStreetInput(e.target.value)}
          />
          <input
          className="input-layout"
          placeholder="Número da casa"
            data-testid="checkout-house-number-input"
            type="input"
            id="house"
            onChange={(e) => handleHouseNumInput(e.target.value)}
          />
      </div>
      <button
      className="btn-style white-text"
        data-testid="checkout-finish-btn"
        disabled={totalPrice === 0 || houseNum === 0 || street === ''}
        // onClick={() => done()}
        onClick={() => createNewSale(user.email, totalPrice, street, houseNum, date, products).then(result => handleResult(result))}
      >
        Finalizar pedido
      </button>
      <div id='sucess'></div>
      {statusSale && <Redirect to='/products' />}
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