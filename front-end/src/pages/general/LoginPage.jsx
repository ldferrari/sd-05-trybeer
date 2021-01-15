import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GeneralContext from '../../context/general/GeneralContext';
import loginData from '../../services/general/fetchLoginData';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';
import '../../css/loginPage.css';

export default function LoginPage(props) {
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const { userData, setUserData } = useContext(GeneralContext);

  const login = async (data) => {
    const usuario = await loginData(data);
    setUserData({
      ...userData,
      id: usuario.id,
      role: usuario.role,
      name: usuario.name,
      email: usuario.email,
    });
    localStorage.setItem('token', usuario.token);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: usuario.id,
        email: usuario.email,
        role: usuario.role,
        name: usuario.name,
      }),
    );
    if (usuario.role === 'administrator') return props.history.push('/admin/orders');
    if (usuario.role === 'client') return props.history.push('/products');
    return true;
  };

  return (
    <div className="login">
      <div className="inputs">
        <label htmlFor="email" className="label">
          Email
          <input
            type="text"
            id="email"
            data-testid="email-input"
            className="input"
            onChange={ (event) => {
              if (validateEmail(event.target.value)) {
                setEmailValidate(true);
                setUserData({ ...userData, email: event.target.value });
              }
            } }
          />
        </label>
        <label htmlFor="senha" className="label">
          Senha
          <input
            type="password"
            id="senha"
            data-testid="password-input"
            className="input"
            onChange={ (event) => {
              if (validatePassword(event.target.value)) {
                setPasswordValidate(true);
                setUserData({ ...userData, password: event.target.value });
              }
            } }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="signin-btn"
        disabled={ !emailValidate || !passwordValidate }
        className="entrar"
        onClick={ () => {
          login(userData);
        } }
      >
        ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        className="semConta"
      >
        <Link to="/register" className="link">Ainda não tenho conta</Link>
      </button>
    </div>
  );
}

LoginPage.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
};
