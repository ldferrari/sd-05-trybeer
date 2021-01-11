import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
import { postRegister } from '../../services/requestAPI';

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
    try {
      ok = await postRegister({
        name, email, password, role: isAdmin ? 'admin' : 'client',
      });
    } catch (error) {
      ok = false;
    }
    if (!ok) {
      setEmailUsed('Email já está sendo usado');
      const timeAlert = 1500;
      setTimeout(() => {
        setEmailUsed('');
      }, timeAlert);
    } else {
      if (isAdmin) {
        return props.history.push('/admin/orders');
      }
      return props.history.push('/products');
    }
    return true;
  };
  const adminFunction = ({ target: { checked } }) => setIsAdmin(checked);

  return (
    <div>
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
            Password:
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
          className={ (validEmail && validPassword && validName) ? 'ready' : '' }
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
