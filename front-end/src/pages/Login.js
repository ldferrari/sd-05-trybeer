import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TryBeerContext from '../context/TryBeerContext';
import fetchLogin from '../services/ApiTrybeer';

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
    <section>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            type="email"
            placeholder="Email"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <button
          data-testid="signin-btn"
          type="button"
          disabled={ !validEmail || password.length < passwordLength }
          onClick={ () => fetchLogin(email, password).then((result) => handleLogin(result)) }
        >
          ENTRAR
        </button>
        <Link to="/register">
          <button data-testid="no-account-btn" type="button">
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </section>
  );
};

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
