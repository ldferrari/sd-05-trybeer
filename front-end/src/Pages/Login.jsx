import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import { getUserDataAct } from '../Redux/Actions/user';

const Login = ({ submitLogin }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isDisabled, isSetDisabled] = useState(true);

  function validaInput(xEmail, xSenha) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexSenha = /^[^W_]{7,100}$/;
    if (regexEmail.test(xEmail) && regexSenha.test(xSenha)) {
      isSetDisabled(false);
    } else {
      isSetDisabled(true);
    }
  }

  useEffect(() => {
    validaInput(email, password);
  }, [email, password]);


  return (
    <div id="Login">
      <h1>Login</h1>
      <form>
        <Input
          test="email-input"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          test="password-input"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
        <button
          disabled={isDisabled}
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            submitLogin({ email, password })}

          }
        >
        Entrar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
  shouldRedirect: state.userRequestReducer.shouldRedirect,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (data) =>
    dispatch(getUserDataAct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
