import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../Components/Input';
import { getUserDataAct } from '../Redux/Actions/user';

const Login = ({ submitLogin, shouldRedirect, userData }) => {
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
    if (userData.user.role === 'administrator') {
      return <Redirect to="/admin/orders" />;
    }
  }
  return (
    <div id="Login">
      <h1>Login</h1>
      <form>
        <p>Email</p>
        <Input
          test="email-input"
          placeholder="Digite seu e-mail"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <p>Senha</p>
        <Input
          type="password"
          test="password-input"
          placeholder="Digite sua senha"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </form>
      <button
        disabled={ isDisabled }
        type="submit"
        onClick={ (event) => {
          event.preventDefault();
          submitLogin({ email, password });
        } }
        data-testid="signin-btn"
      >
        ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ () => setRegister(true) }
      >
        Ainda não tenho conta
      </button>
      {isAnInvalidEmail && (<p>Email ou senha inválidos</p>) }
    </div>
  );
};

Login.propTypes = {
  shouldRedirect: PropTypes.bool.isRequired,
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
