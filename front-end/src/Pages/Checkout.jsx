import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Restrict from '../Components/Restrict';

import helpers from '../Helper/';

const TIMEOUT = 3000;

function Checkout({
  history, userData, submitOrder
}) {
  const [buttonShoulBeDisabled, setbuttonShoulBeDisabled] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [cart] = useState(helpers.getCartInfo());

  useEffect(() => {
    const c = helpers.getCartInfo();
    console.log(c);
  }, []);

  useEffect(() => {
    if (false || street === '' || houseNumber === '') {
      setbuttonShoulBeDisabled(true);
    } else {
      setbuttonShoulBeDisabled(false);
    }
  }, [setbuttonShoulBeDisabled, street, houseNumber]);

  function submitHandler() {
    setShouldRedirect(true);
    submitOrder({
      cart,
      userData,
      street,
      houseNumber,
    });
  }

  if (shouldRedirect) {
    setTimeout(() => {
      setRedirect(true);
    }, TIMEOUT);
  }
  if (redirect) return <Redirect to="/products" />;

  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      <h3>Produtos</h3>
      <CheckoutProductsList cart={ cart } />
      <h3>Endereço</h3>
      <p>Rua:</p>
      <br />
      <Input
        test="checkout-street-input"
        id="rua"
        onChange={ (e) => setStreet(e.target.value) }
      />
      <br />
      <p>Número da casa:</p>
      <br />
      <Input
        test="checkout-house-number-input"
        id="numero-da-casa"
        onChange={ (e) => setHouseNumber(e.target.value) }
      />
      <button
        disabled={ buttonShoulBeDisabled }
        data-testid="checkout-finish-btn"
        type="button"
        onClick={ () => submitHandler() }
      >
        Finalizar Pedido
      </button>
      {shouldRedirect && <p>Compra realizada com sucesso!</p>}
    </Restrict>
  );
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
  submitOrder: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    user: PropTypes.shape(Object),
  }).isRequired,
  repopulatingStore: PropTypes.func.isRequired,
};

export default Checkout;
