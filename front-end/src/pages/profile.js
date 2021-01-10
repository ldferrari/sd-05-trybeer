import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { updateUserName } from '../services/api';
import Header from '../components/Header';
import Context from '../context/Context';

const Profile = () => {
  // const [email, setEmail] = useState('');
  const { userEmail, userName, setUserName } = useContext(Context);
  const { role } = localStorage;
  const nameSize = 12;
  const [disableBtn, setDisableBtn] = useState(false);
  const handleChange = (event) => {
    setUserName(event.target.value);
    if (userName.length >= nameSize) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userData = { name: userName, email: userEmail };
    const response = await updateUserName(userData, localStorage.token);
    const saveButton = document.querySelectorAll('button')[1];
    saveButton.innerText = 'Atualização concluída com sucesso';
    return response;
  };
  if (!localStorage.token) return <Redirect to="/login" />;
  return (
    <div>
      <Header>{role === 'administrator' ? 'Perfil' : 'Meu perfil'}</Header>
      <form>
        <label htmlFor="name" data-testid="profile-name">
          {role === 'administrator' ? userName : 'Nome'}
          <input
            name="name"
            type="text"
            data-testid="profile-name-input"
            // minLength acessibilidade
            minLength="12"
            placeholder={ userName }
            required
            onChange={ (event) => handleChange(event) }
            readOnly={ role === 'administrator' }
          />
        </label>
        <label htmlFor="email" id="lblEmail" data-testid="profile-email">
          {role === 'administrator' ? userEmail : 'Email'}
          <input
            name="email"
            type="email"
            data-testid="profile-email-input"
            placeholder={ userEmail }
            readOnly
          />
        </label>
        <button
          type="button"
          data-testid="profile-save-btn"
          disabled={ !disableBtn }
          onClick={ (e) => handleUpdate(e) }
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Profile;
