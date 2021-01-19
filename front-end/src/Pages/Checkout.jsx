import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';
import { submitOrderAct, repopulatingAct } from '../Redux/Actions/index';
import Restrict from '../Components/Restrict';

const zero = 0;
const tresMil = 3000;

function Checkout({
  history, userData, cart, submitOrder, repopulatingStore,
}) {
  const [buttonShoulBeDisabled, setbuttonShoulBeDisabled] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isTotalZero, setisTotalZero] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) repopulatingStore(localCart);
  }, [repopulatingStore]);

  useEffect(() => {
    if (isTotalZero || street === '' || houseNumber === '') {
      setbuttonShoulBeDisabled(true);
    } else {
      setbuttonShoulBeDisabled(false);
    }
  }, [isTotalZero, setbuttonShoulBeDisabled, street, houseNumber]);

  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    zero,
  );

  function submitHandler() {
    setShouldRedirect(true);
    submitOrder({
      cart,
      userData,
      total,
      street,
      houseNumber,
    });
  }

  if (shouldRedirect) {
    setTimeout(() => {
      setRedirect(true);
    }, tresMil);
  }
  if (redirect) return <Redirect to="/products" />;

  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      <h3>Produtos</h3>
      {total === zero && <p>Não há produtos no carrinho</p>}
      <CheckoutProductsList setisTotalZero={ setisTotalZero } />
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

const mapStateToProps = ({ userRequestReducer, productsRequestReducer }) => ({
  userData: userRequestReducer.userData,
  cart: productsRequestReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (data) => dispatch(submitOrderAct(data)),
  repopulatingStore: (cart) => dispatch(repopulatingAct(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
