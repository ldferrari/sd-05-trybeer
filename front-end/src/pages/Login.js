import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../services/fetch';
import { withRouter } from 'react-router-dom';
import './Login.css'
import SqlBtn from '../components/sqlBtn';

function inputEmail(handleEmailChange) {
  return (
    <div className="div-input">
      <input
      placeholder="Email"
      className="input-layout"
      type="email"
      data-testid="email-input"
      onChange={(e) => handleEmailChange(e)}
      />
    </div>
  );
}

function inputPassword(handlePasswordChange) {
  return (
    <div className="div-input">
      <input
      placeholder="Senha"
        className="input-layout"
        type="password"
        data-testid="password-input"
        name="password"
        onChange={(e) => handlePasswordChange(e)}
      />
    </div>
  );
}

function Login({ history }) {
  const [checkedEmail, setCheckedEmail] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const { setEmail, setPassword, email, password } = useContext(TrybeerContext);

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
    <div className="login-page login-container" data-testid="">
      <div className="form-container">
        <h1 className="white-text">Trybeer</h1>
      {inputEmail(handleEmailChange)}
      {inputPassword(handlePasswordChange)}
      <button
        className="btn-style white-text"
        type="button"
        data-testid="signin-btn"
        disabled={!(checkedEmail && checkedPassword)}
        onClick={() =>
          login(email, password).then((result) => handleResult(result))
        }
        >
        Entrar
      </button>
        <button className="btn-style white-text" type="button" data-testid="no-account-btn">
      <Link to="/register" className="white-text">
          Ainda não tenho conta
      </Link>
        </button>
      <SqlBtn />
      </div>
    </div>
  );
}

export default withRouter(Login);
