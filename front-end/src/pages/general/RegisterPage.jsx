import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';
import fetchUserData from '../../services/general/fetchUserData';
import '../../css/registerPage.css';

export default function RegisterPage() {
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isEmailRegistered, setEmailRegistered] = useState(false);
  const [isEmailVerified, setEmailVerified] = useState(false);
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
    if (isFetched) setIsFetched(false);
    const { message, role } = await fetchUserData(user);
    setIsFetched(true);
    if (isEmailRegistered) {
      setEmailRegistered(false);
    }
    if (isEmailVerified) {
      setEmailVerified(false);
    }
    if (message === 'E-mail already in database.') {
      setEmailRegistered(true);
      setEmailVerified(true);
    }
    if (message === 'ok' && role === 'client') {
      setEmailRegistered(false);
      setEmailVerified(true);
    }
    if (message === 'ok' && role === 'admin') {
      setEmailRegistered(false);
      setEmailVerified(true);
    }
  };
  if (isFetched && !isEmailRegistered && userData.role === 'client' && isEmailVerified) {
    return <Redirect to="/products" />;
  }

  if (isFetched && !isEmailRegistered && userData.role === 'admin' && isEmailVerified) {
    return <Redirect to="/admin/orders" />;
  }

  return (
    <div className="allRegistro">
      <h2 className="title">Registro</h2>
      <div className="bodyRegistro">
        <div>
          <label htmlFor="name" className="labelRegistro">
            Nome
            <input
              type="text"
              id="name"
              data-testid="signup-name"
              className="inputRegistro"
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
          <label htmlFor="email" className="labelRegistro">
            Email
            <input
              type="text"
              id="email"
              data-testid="signup-email"
              className="inputRegistro"
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
          <label htmlFor="password" className="labelRegistro">
            Senha
            <input
              type="password"
              id="password"
              data-testid="signup-password"
              className="inputRegistro"
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
          <label htmlFor="want-to-sell" className="labelCheckRegistro">
            <input
              type="checkbox"
              id="want-to-sell"
              data-testid="signup-seller"
              className="inputCheckRegistro"
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
            className="cadastrar"
            onClick={ () => isUserRegistered(userData) }
            disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
