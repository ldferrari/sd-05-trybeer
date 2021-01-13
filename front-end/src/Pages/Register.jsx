import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../Components/Input';
import { registerUserAct } from '../../src/Redux/Actions/user';
import { func } from 'prop-types';

const Register = ({ registerUser }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isDisabled, isSetDisabled] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function validate() {
    const validName = /^[a-zA-Z ]{12}[a-zA-Z ]*$/.test(name);
    const validEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
    const validSenha = /^[^W_]{7,100}$/.test(password);
    if (validName && validEmail && validSenha) isSetDisabled(false);
    else isSetDisabled(true);
  }

  useEffect(() => {
    validate();
  }, [name, email, password]);

  if (shouldRedirect) {
    if (!isSeller) {
      return <Redirect to="/products" />;
    } else {
      return <Redirect to="/admin/orders" />; // conferir se é este endPointMesmo
    }
  }

  function registerHandle() {
    const role = isSeller ? 'administrator' : 'client';
    registerUser({ name, email, password, role });

    setShouldRedirect(true);
  }

  return (
    <div className="container-main" id="Register">
      <div className="container-page">
        <h1>Register</h1>
        <label htmlFor="name">Nome</label>
        <Input
          test="signup-name"
          id="name"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <Input
          test="signup-email"
          id="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          test="signup-password"
          id="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="quero-vender">Quero Vender</label>
        <input
          type="checkbox"
          id="quero-vender"
          data-testid="signup-seller"
          onChange={({ target: { checked } }) => {
            setIsSeller(checked);
          }}
        />
        <button
          disabled={isDisabled}
          data-testid="signup-btn"
          onClick={() => registerHandle()}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

//
// Cadastrar e redirecionar para a tela do cliente ou admin

// const mapStateToProps = ({ userRequestReducer }) => ({
// userData: userRequestReducer.userData,
// })

const mapDispatchToProps = (dispatch) => ({
  registerUser: (newUserData) => dispatch(registerUserAct(newUserData)),
});

export default connect(null, mapDispatchToProps)(Register);
