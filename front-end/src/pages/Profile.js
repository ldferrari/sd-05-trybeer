import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import TryBeerContext from '../context/TryBeerContext';
import { updateUser } from '../services/ApiTrybeer';
import Header from '../components/Header';

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem('user'));
  const role = userData && userData.user && userData.user.role;
  const token = userData && userData.token;
  const [success, setSuccess] = useState(false);
  const { name, setName, email } = useContext(TryBeerContext);

  const handleClick = (event) => {
    event.preventDefault();
    updateUser(name, email, token);
    if (name.length >= 1) setSuccess(true);
  };

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title={ role === 'client' ? 'Meu perfil' : 'Perfil' } />
      <form>
        <label htmlFor="name" data-testid="profile-name">
          {role === 'client' ? 'Nome' : 'Tryber Admin'}
          <input
            type="text"
            value={ name }
            data-testid="profile-name-input"
            onChange={ (event) => setName(event.target.value) }
            readOnly={ role === 'administrator' }
            placeholder={ name }
          />
        </label>
        <label htmlFor="email" data-testid="profile-email">
          {role === 'client' ? 'Email' : email}
          <input
            id="email"
            type="email"
            data-testid="profile-email-input"
            readOnly
            placeholder={ email }
          />
        </label>
        <button
          type="submit"
          disabled={ !name }
          data-testid="profile-save-btn"
          onClick={ (event) => {
            handleClick(event, name, email, token);
          } }
        >
          Salvar
        </button>
      </form>
      { success && <span>Atualização concluída com sucesso</span> }
    </section>
  );
}
