import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
import logo from '../../images/uaiWhite.png';
import { postLogin } from '../../services/requestAPI';
// trocar por controler de login

const saveToken = (token) => localStorage.setItem('token', token);

const Login = (props) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertLogin, setAlertLogin] = useState('');
  const validationEmail = (value) => (/[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(value)
    ? setValidEmail(true)
    : setValidEmail(false));

  const validationPassword = (value) => {
    const minLength = 6;
    return value.length >= minLength ? setValidPassword(true) : setValidPassword(false);
  };

  useEffect(() => {
    console.log('------------LOGIN PAGE-------------');
  }, []);
  useEffect(() => {
    validationEmail(email);
  }, [email]);

  useEffect(() => {
    validationPassword(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token;
    let role;
    try {
      const user = await postLogin({ email, password });
      token = user.token;
      role = user.role;
    } catch (error) {
      console.log(error);
      setAlertLogin('Email e/ou password incorretos');
      const timeAlert = 3500;
      setTimeout(() => {
        setAlertLogin('');
      }, timeAlert);
      return false;
    }
    /* if (timer) {
      clearTimeout(timer);
    } */
    saveToken(token);
    if (role === 'administrator') {
      props.history.push('/admin/orders');
    } else if (role === 'client') {
      props.history.push('/products');
    } else {
      setValidEmail(true);
      setValidEmail(false);
    }
    return true;
  };
  return (
    <div className="loginpage">
      <img src={ logo } className="logo" alt="logo" />
      <form className="column-login">
        <fieldset className="noDecor">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              className="inputLogin"
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="email-input"
              value={ email }
            />
          </label>
        </fieldset>
        <fieldset className="noDecor">
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              className="inputLogin"
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="password-input"
              value={ password }
            />
          </label>
        </fieldset>
        <span className="email-alert">{alertLogin}</span>
        <button data-testid="no-account-btn" type="button" className="semConta">
          <Link to="/register" className="semConta">Ainda não tenho conta</Link>
        </button>
        <button
          type="submit"
          disabled={ !(validEmail && validPassword) }
          onClick={ handleSubmit }
          className={ (validEmail && validPassword) ? 'loginBtn' : '' }
          data-testid="signin-btn"
        >
          ENTRAR
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;

Login.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
