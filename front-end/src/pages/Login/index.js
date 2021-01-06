import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
// trocar por controler de login
const getTokenAndData = async ({ email, password }) => ({
  token: 'tokenDoido',
  user: { email, password, role: 'admin' },
});
const saveToken = (token) => localStorage.setItem('token', token);

const Login = (props) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    const { token, user } = await getTokenAndData({ email, password });
    saveToken(token);
    if (user.role === 'admin') {
      props.history.push('/admin/orders');
    } else if (user.role === 'client') {
      props.history.push('/products');
    } else {
      setValidEmail(true);
      setValidEmail(false);
    }
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
            Password:
            <input
              type="password"
              name="password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="password-input"
              value={ password }
            />
          </label>
        </fieldset>
        <button data-testid="no-account-btn" type="button">
          <Link to="/register">Ainda não tenho conta</Link>
        </button>
        <button
          type="submit"
          disabled={ !(validEmail && validPassword) }
          onClick={ handleSubmit }
          data-testid="signin-btn"
        >
          ENTRAR
        </button>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
