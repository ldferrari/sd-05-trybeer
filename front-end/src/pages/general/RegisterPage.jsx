import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';
import fetchUserData from '../../services/general/fetchUserData';

export default function RegisterPage() {
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isEmailRegistered, setEmailRegistered] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client',
  });

  const checked = () => {
    const isChecked = document.getElementById('want-to-sell').checked;
    if (isChecked) {
      setUserData({ ...userData, role: 'admin' });
    } else {
      setUserData({ ...userData, role: 'client' });
    }
  };

  const isUserRegistered = async (user) => {
    const { message, role } = await fetchUserData(user);
    setEmailRegistered(false);
    setIsFetched(false);
    console.log(message, role);
    if (message === 'E-mail already in database.') {
      setIsFetched(true);
      return setEmailRegistered(true);
    }
    if (message === 'ok' && role === 'admin') {
      setEmailRegistered(false);
      return setIsFetched(true);
    }
    setIsFetched(true);
    return true;
  };
  // console.log(isFetched, isEmailRegistered === false, userData.role === 'client')
  // console.log(isFetched && isEmailRegistered === false && userData.role === 'client')
  if (isFetched && !isEmailRegistered && userData.role === 'client') return <Redirect to="/products" />;

  if (isFetched && !isEmailRegistered && userData.role === 'admin') return <Redirect to="/admin/orders" />;

  return (
    <div>
      <h2>Registro</h2>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="signup-name"
            onChange={ ((event) => {
              setNameValid(validateName(event.target.value));
              setUserData({
                ...userData,
                name: event.target.value,
              });
            }) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="signup-email"
            onChange={ ((event) => {
              setEmailValid(validateEmail(event.target.value));
              setUserData({
                ...userData,
                email: event.target.value,
              });
            }) }
          />
        </label>
        { isEmailRegistered ? <div>E-mail already in database.</div> : false }
      </div>
      <div>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="signup-password"
            onChange={ ((event) => {
              setPasswordValid(validatePassword(event.target.value));
              setUserData({
                ...userData,
                password: event.target.value,
              });
            }) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="want-to-sell">
          <input
            type="checkbox"
            id="want-to-sell"
            data-testid="signup-seller"
            onChange={ () => {
              checked();
            } }
          />
          Quero Vender
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="signup-btn"
          onClick={ () => isUserRegistered(userData) }
          disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
