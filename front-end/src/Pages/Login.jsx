import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { getUserDataAct } from '../Redux/Actions/user';

const pageStyle = {
  justifyContent: 'center',
};

const containerStyle = {
  justifyContent: 'space-between',
  height: '250px',
};

const Login = ({ submitLogin, userData }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isDisabled, isSetDisabled] = useState(true);
  const [register, setRegister] = useState(false);
  const [isAnInvalidEmail, setIsAnInvalidEmail] = useState(false);

  function validaInput(xEmail, xSenha) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexSenha = /^[^W_]{6,100}$/;
    if (regexEmail.test(xEmail) && regexSenha.test(xSenha)) {
      isSetDisabled(false);
    } else {
      isSetDisabled(true);
    }
  }

  useEffect(() => {
    validaInput(email, password);
  }, [email, password]);

  if (register) return <Redirect to="/register" />;
  if (userData.message && isAnInvalidEmail === false) return setIsAnInvalidEmail(true);
  if (userData.user) {
    if (userData.user.role === 'client') return <Redirect to="/products" />;
    if (userData.user.role === 'administrator') return <Redirect to="/admin/orders" />;
  }
  return (
    <div className="container-main" style={ pageStyle }>
      <div className="container-screen" style={ containerStyle }>
        <TextField
          data-testid="email-input"
          label="Email"
          variant="outlined"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          data-testid="password-input"
          label="Senha"
          variant="outlined"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <Button
            color="primary"
            variant="outlined"
            disabled={ isDisabled }
            data-testid="signin-btn"
            type="submit"
            onClick={ (ev) => {
              ev.preventDefault();
              submitLogin({ email, password });
            } }
          >
            ENTRAR
          </Button>
          <Button
            data-testid="no-account-btn"
            onClick={ () => setRegister(true) }
          >
            Ainda não tenho conta
          </Button>
        </div>
        {isAnInvalidEmail && (<p>Email ou senha inválidos</p>) }
      </div>
    </div>
  );
};

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    message: PropTypes.string,
    user: PropTypes.shape({
      role: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
  shouldRedirect: state.userRequestReducer.shouldRedirect,
  userData: state.userRequestReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (data) => dispatch(getUserDataAct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
