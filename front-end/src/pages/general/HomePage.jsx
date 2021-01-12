import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import loginData from '../../services/general/fetchLoginData';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';
import '../../css/loginPage.css'

export default function LoginPage() {
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const login = async (data) => {
    const usuario = await loginData(data);
    setUserData({ ...userData, role: usuario.role });
  };

  if (userData.role === 'administrator') return <Redirect to="/admin/orders" />;
  if (userData.role === 'client') return <Redirect to="/products" />;
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
