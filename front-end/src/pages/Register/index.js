import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
import { postRegister } from '../../services/requestAPI';

let timer;

const saveToken = (token) => localStorage.setItem('token', token);

const Register = (props) => {
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailUsed, setEmailUsed] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const validationName = (value) => (/^[A-Za-z \s]{12,}$/.test(value) ? setValidName(true) : setValidName(false));
  const validationEmail = (value) => (/[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(value)
    ? setValidEmail(true)
    : setValidEmail(false));

  const validationPassword = (value) => {
    const minLength = 6;
    return value.length >= minLength ? setValidPassword(true) : setValidPassword(false);
  };

  useEffect(() => {
    validationName(name);
  }, [name]);

  useEffect(() => {
    validationEmail(email);
  }, [email]);

  useEffect(() => {
    validationPassword(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ok;
    let token;
    try {
      const { data } = await postRegister({
        name, email, password, role: isAdmin ? 'administrator' : 'client',
      });
      token = data.token;
      ok = data.ok;
    } catch (error) {
      ok = false;
    }
    saveToken(token);
    if (!ok) {
      setEmailUsed('E-mail already in database.');
      const timeAlert = 10000;
      timer = setTimeout(() => {
        setEmailUsed('');
      }, timeAlert);
      return false;
    }
    if (timer) {
      clearTimeout(timer);
    }
    if (isAdmin) {
      return props.history.push('/admin/orders');
    }
    return props.history.push('/products');
  };
  const adminFunction = ({ target: { checked } }) => setIsAdmin(checked);

  return (
    <div className="registerPage">
      <h2 className="registerTitle">Registre-se:</h2>
      <form className="column-register">
        <fieldset>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              onChange={ ({ target: { value } }) => setName(value) }
              data-testid="signup-name"
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="signup-email"
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
              data-testid="signup-password"
            />
          </label>
        </fieldset>
        <span className="email-alert">{emailUsed}</span>
        <fieldset className="checkbox">
          <label htmlFor="seller">
            <input
              id="seller"
              type="checkbox"
              onClick={ adminFunction }
              data-testid="signup-seller"
            />
            Quero Vender
          </label>
        </fieldset>
        <button
          type="submit"
          disabled={ !(validEmail && validPassword && validName) }
          className={ (validEmail && validPassword && validName) ? 'ready loginBtn' : '' }
          onClick={ handleSubmit }
          data-testid="signup-btn"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;

Register.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
