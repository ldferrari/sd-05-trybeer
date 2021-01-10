import React, { useState, useContext } from 'react';

import { updateUserName } from '../services/api';
import Header from '../components/Header';
import Context from '../context/Context';

const Profile = () => {
  // const [email, setEmail] = useState('');
  const { userEmail, userName, setUserName } = useContext(Context);
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
  return (
    <div>
      <Header>Meu perfil</Header>
      <form>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            data-testid="profile-name-input"
            // minLength acessibilidade
            minLength="12"
            placeholder={ userName }
            required
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="email" id="lblEmail">
          Email
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
