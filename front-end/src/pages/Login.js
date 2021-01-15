import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { checkEmail, checkPassword } from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../services/fetch';
import '../css/style12.css';
import '../css/login.css';
import { trybeerLogo } from '../images/trybeerLogo.svg';

import SqlBtn from '../components/sqlBtn';

function inputEmail(handleEmailChange) {
  return (
    <div className="input-container">
      <input
      placeholder="Email"
        className="input-layout"
        type="email"
        data-testid="email-input"
        onChange={ (e) => handleEmailChange(e) }
      />
    </div>
  );
}

function inputPassword(handlePasswordChange) {
  return (
    <div className="input-container">
      <input
      className="input-layout"
        placeholder="Senha"
        type="password"
        data-testid="password-input"
        name="password"
        onChange={ (e) => handlePasswordChange(e) }
      />
    </div>
  );
}

function Login({ history }) {
  const [checkedEmail, setCheckedEmail] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const {
    setEmail, setPassword, email, password,
  } = useContext(TrybeerContext);

  const handleEmailChange = (e) => {
    setCheckedEmail(checkEmail(e.target.value));
    if (!checkedEmail) {
      console.log('email is bad format');
    }
    return setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setCheckedPassword(checkPassword(e.target.value));
    if (!checkedPassword) {
      console.log('password has to have 6 caracteres');
    }
    return setPassword(e.target.value);
  };

  const handleResult = (result) => {
    localStorage.setItem('user', JSON.stringify(result));
    if (result.role === 'administrator') {
      history.push('/admin/orders');
    }
    if (result.role === 'client') {
      history.push('/products');
    }
  };

  return (
    <div className="general-container" data-testid="">
      <div className="login-container">
        <div className="form-container">
          <h1 className="white-text">Trybeer</h1>
      {inputEmail(handleEmailChange)}
      {inputPassword(handlePasswordChange)}
      <button
        className="waves-effect waves-light btn btn-layout"
        type="button"
        data-testid="signin-btn"
        disabled={ !(checkedEmail && checkedPassword) }
        onClick={ () => login(email, password).then((result) => handleResult(result)) }
        >
        ENTRAR
      </button>
        <button type="button" data-testid="no-account-btn" className="waves-effect waves-light btn btn-layout">
      <Link to="/register" className="white-text">
          Ainda não tenho conta
      </Link>
        </button>
      <SqlBtn />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.arrayOf(Object).isRequired,
};
