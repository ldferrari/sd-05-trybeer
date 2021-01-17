import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { registerUserAct } from '../Redux/Actions/user';

const Register = ({ registerUser, userError }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isDisabled, isSetDisabled] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function validate() {
    const validName = /^[a-zA-Z ]{12}[a-zA-Z ]*$/.test(name);
    const validEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
    const validSenha = /^[^W_]{5,100}$/.test(password);
    if (validName && validEmail && validSenha) isSetDisabled(false);
    else isSetDisabled(true);
  }

  // ++++++++++++++++++++++++++

  // useEffect precisa colocar a função que sera usada nas dependências
  // Que por sua vez, se for uma função que que muda algum state local, pode dar um loop estranho.
  // Lint não permite

  // useEffect(() => {
  //   validate();
  // }, [name, email, password, validate]);

  // ++++++++++++++++++++++++++

  if (shouldRedirect && !userError) {
    if (!isSeller) {
      return <Redirect to="/products" />;
    }
    return <Redirect to="/admin/orders" />;
  }

  async function registerHandle() {
    const role = isSeller ? 'administrator' : 'client';
    await registerUser({
      name,
      email,
      password,
      role,
    });

    setShouldRedirect(true);
  }

  return (
    <div className="container-main" id="Register">
      <div className="container-page">
        <h1>Register</h1>
        { /* Se usar o component Input o lint não o reconhece como 'controle do label form' */ }
        <label htmlFor="name">
          Nome
          <input
            data-testid="signup-name"
            id="name"
            placeholder="Digite seu nome"
            onChange={ (e) => {
              setName(e.target.value);
              validate();
            } }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="signup-email"
            id="email"
            placeholder="Digite seu e-mail"
            onChange={ (e) => {
              setEmail(e.target.value);
              validate();
            } }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="signup-password"
            id="password"
            placeholder="Digite sua senha"
            onChange={ (e) => {
              setPassword(e.target.value);
              validate();
            } }
          />
        </label>
        <label htmlFor="quero-vender">
          Quero Vender
          <input
            type="checkbox"
            id="quero-vender"
            data-testid="signup-seller"
            onChange={ ({ target: { checked } }) => {
              setIsSeller(checked);
            } }
          />
        </label>
        <button
          disabled={ isDisabled }
          type="button"
          data-testid="signup-btn"
          onClick={ () => registerHandle() }
        >
          Cadastrar
        </button>
        {userError && <p>E-mail already in database.</p>}
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: propTypes.func.isRequired,
  userError: propTypes.string.isRequired,
};

const mapStateToProps = ({ userRequestReducer }) => ({
  userError: userRequestReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (newUserData) => dispatch(registerUserAct(newUserData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
