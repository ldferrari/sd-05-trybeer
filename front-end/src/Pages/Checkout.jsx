import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';
import { submitOrderAct } from '../Redux/Actions/index';

const zero = 0;

function Checkout({
  history, userData, cart, submitOrder,
}) {
  const [buttonShoulBeDisabled, setbuttonShoulBeDisabled] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isTotalZero, setisTotalZero] = useState(false);

  useEffect(() => {
    if (isTotalZero || street === '' || houseNumber === '') {
      setbuttonShoulBeDisabled(true);
    } else {
      setbuttonShoulBeDisabled(false);
    }
  }, [isTotalZero, setbuttonShoulBeDisabled, street, houseNumber]);
  const total = cart.reduce((acc, product) => acc + (product.quantity * product.price), zero);
  if (!userData.user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      <h3>Produtos</h3>
      <CheckoutProductsList setisTotalZero={ setisTotalZero } />
      <h3>Endereço</h3>
      <p>
        Rua:
      </p>
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
        onClick={ () => submitOrder({
          cart, userData, total, street, houseNumber,
        }) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
  submitOrder: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    user: PropTypes.shape(Object),
  }).isRequired,
};

const mapStateToProps = ({ userRequestReducer, productsRequestReducer }) => ({
  userData: userRequestReducer.userData,
  cart: productsRequestReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (data) => dispatch(submitOrderAct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
