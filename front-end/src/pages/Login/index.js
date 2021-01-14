import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
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
    <div>
      <form className="column-login">
        <fieldset>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="email-input"
              value={ email }
            />
          </label>
        </fieldset>
        <fieldset>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="password-input"
              value={ password }
            />
          </label>
        </fieldset>
        <span className="email-alert">{alertLogin}</span>
        <button data-testid="no-account-btn" type="button">
          <Link to="/register">Ainda não tenho conta</Link>
        </button>
        <button
          type="submit"
          disabled={ !(validEmail && validPassword) }
          onClick={ handleSubmit }
          className={ (validEmail && validPassword) ? 'ready' : '' }
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
