import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import TryBeerContext from '../context/TryBeerContext';
import { updateUser } from '../services/ApiTrybeer';

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem('user'));
  const role = userData && userData.user && userData.user.role;
  const { name, setName } = useContext(TryBeerContext);
  return (
    <section>
      <form>
        <label htmlFor="name">
          Name
        </label>
        <input
          type="text"
          value={ name }
          data-testid="profile-name-input"
          onChange={ (e) => setName(e.target.value) }
        />
        <label htmlFor="email">
          Email
        </label>
        <input id="email" type="email" data-testid="profile-email-input" readOnly />
        <button
          type="submit"
          disabled={ !name }
          data-testid="profile-save-btn"
          onClick={ () => {
            updateUser(name);
          } }
        >
          Salvar
        </button>
      </form>
    </section>
  );
}
