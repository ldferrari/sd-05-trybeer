import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GeneralContext from '../../context/general/GeneralContext';
import loginData from '../../services/general/fetchLoginData';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';

export default function LoginPage() {
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const { userData, setUserData, setLoggedIn } = useContext(GeneralContext);

  const login = async (data) => {
      const usuario = await loginData(data)
      await setUserData({ ...userData, role: usuario.role, name: usuario.name });
      setLoggedIn(true);
      localStorage.setItem("user", JSON.stringify({ email: usuario.email, role: usuario.role, name: usuario.name }));
  };

  if (userData.role === 'administrator') return <Redirect to="/admin/orders" />;
  if (userData.role === 'client') return <Redirect to="/products" />;
  return (
    <div>
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          data-testid="email-input"
          onChange={ (event) => {
            if (validateEmail(event.target.value)) {
              setEmailValidate(true);
              setUserData({ ...userData, email: event.target.value });
            }
          } }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          type="password"
          id="senha"
          data-testid="password-input"
          onChange={ (event) => {
            if (validatePassword(event.target.value)) {
              setPasswordValidate(true);
              setUserData({ ...userData, password: event.target.value });
            }
          } }
        />
      </label>
      <button
        type="button"
        data-testid="signin-btn"
        disabled={ !emailValidate || !passwordValidate }
        onClick={ () => { 
          login(userData);
        }}
      >
        ENTRAR
      </button>
      <button type="button" data-testid="no-account-btn">
        <Link to="/register">Ainda não tenho conta</Link>
      </button>
    </div>
  );
}
