import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TryBeerContext from '../context/TryBeerContext';
import { fetchLogin } from '../services/ApiTrybeer';
import '../style/Login.css';

const logo = require('../logo.jpg');

const Login = ({ history }) => {
  const {
    email, setEmail, password, setPassword,
  } = useContext(TryBeerContext);
  const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = RegEx.test(String(email).toLowerCase());
  const passwordLength = 6;

  const handleLogin = (result) => {
    localStorage.setItem('user', JSON.stringify(result));
    return result.user.role === 'administrator'
      ? history.push('/admin/orders')
      : history.push('/products');
  };

  return (
    <div className="container">
      <div className="containerA">
        <img src={ logo } alt="garrafamóvel" className="logo" />
      </div>
      <section>
        <form className="login-container">
          <div className="containerA">
            <span className="login-container title">TryBeer</span>
            <label htmlFor="email-input" className="login-container">
              Email
              <input
                className="input lesserMargin"
                data-testid="email-input"
                type="email"
                placeholder="Email"
                onChange={ (event) => setEmail(event.target.value) }
              />
            </label>
            <label htmlFor="password-input" className="login-container">
              Senha
              <input
                className="input lesserMargin"
                data-testid="password-input"
                type="password"
                placeholder="Senha"
                onChange={ (event) => setPassword(event.target.value) }
              />
            </label>
            <button
              className="button margin-top green"
              data-testid="signin-btn"
              type="button"
              disabled={ !validEmail || password.length < passwordLength }
              onClick={ () => fetchLogin(email, password).then((result) => handleLogin(result)) }
            >
              ENTRAR
            </button>
            <Link to="/register">
              <button className="button margin-top brown" data-testid="no-account-btn" type="button">
                Ainda não tenho conta
              </button>
            </Link>
          </div>
        </form>
      </section>
      <div className="footer">
        <p>
          Termos de uso Política de privacidade
          © 2021 TryBeer - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
