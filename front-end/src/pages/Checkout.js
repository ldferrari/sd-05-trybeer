import React, { useContext, useState } from 'react';
// import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';

const Checkout = () => {
  const {
    streetName, setStreetName, houseNumber, setHouseNumber,
  } = useContext(TryBeerContext);
  const [success, setSuccess] = useState(false);
  const noProducts = 0;
  const decimals = 2;
  const delayTime = 1500;
  const userData = JSON.parse(localStorage.getItem('user'));
  const role = userData && userData.user && userData.user.role;
  const itemTotalPrice = (parseFloat(JSON.parse(localStorage.getItem('order')).itemTotalPrice).toFixed(decimals)).replace('.', ',');
  const itemUnitPrice = (JSON.parse(localStorage.getItem('order')).itemUnitPrice).replace('.', ',');
  const { index } = JSON.parse(localStorage.getItem('order'));
  const { quantity } = JSON.parse(localStorage.getItem('order'));
  const history = useHistory();

  const goToProducts = () => history.push('/products');

  const handleClick = (e) => {
    e.preventDefault();
    setSuccess(!success);
    setTimeout(goToProducts, delayTime);
  };

  return (
    <section>
      <Header title={ role === 'client' ? 'Meu perfil' : 'Perfil' } />
      <h5>Produtos</h5>
      <h5 data-testid={ `${index}-product-qtd-input` }>{quantity}</h5>
      <h5 data-testid={ `${index}-product-name` }>
        {JSON.parse(localStorage.getItem('order')).product}
      </h5>
      <h5 data-testid={ `${index}-product-total-value` }>
        {`R$ ${itemTotalPrice}`}
      </h5>
      <h5 data-testid={ `${index}-product-unit-price` }>
        {`(R$ ${itemUnitPrice} un)`}
      </h5>
      <button type="button" data-testid={ `${index}-removal-button` }>X</button>
      <h5 data-testid="order-total-value">{`Total: R$ ${itemTotalPrice}`}</h5>

      <form>
        <label htmlFor="checkout-street-input">
          Rua:
          <input
            type="text"
            data-testid="checkout-street-input"
            onChange={ (event) => setStreetName(event.target.value) }
          />
        </label>
        <label htmlFor="checkout-house-number-input">
          Número da casa:
          <input
            type="text"
            onChange={ (event) => setHouseNumber(event.target.value) }
            data-testid="checkout-house-number-input"
          />
        </label>
        <button
          type="submit"
          disabled={ !streetName || !houseNumber || quantity === noProducts }
          data-testid="checkout-finish-btn"
          onClick={ (event) => {
            handleClick(event);
          } }
        >
          Finalizar Pedido
        </button>
      </form>
      <span>{success && 'Compra realizada com sucesso!'}</span>
    </section>
  );
};

export default Checkout;
