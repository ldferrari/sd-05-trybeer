import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import './index.css';
// trocar por controler de login
const sendToDB = async ({
  name, email, password, role,
}) => ({
  name, email, password, role,
});

const Register = (props) => {
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    await sendToDB({
      name, email, password, role: isAdmin ? 'admin' : 'client',
    });
    if (isAdmin) {
      return props.history.push('/admin/orders');
    }
    return props.history.push('/products');
  };
  const adminFunction = ({ target: { checked } }) => setIsAdmin(checked);

  return (
    <div>
      <form className="column">
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
        <label htmlFor="seller">
          <input
            type="checkbox"
            onClick={ adminFunction }
            checked={ isAdmin }
            data-testid="signup-seller"
          />
          Quero Vender
        </label>
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