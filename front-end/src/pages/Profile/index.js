import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';

import './index.css';

const Perfil = () => {
  const [disabled, setDisable] = useState(true);

  const {
    nomeProfile,
    setNomeProfile,
    emailProfile,
  } = useContext(AppContext);

  const submitChange = async () => {
    axios.post('http://localhost:3001/api/insert', {
      name: nomeProfile,
    }).then(() => {
      return 'Sucesso!';
    });
  };

  const handleChanged = (e) => {
    setNomeProfile(e.target.value);
    const lengthName = 3;
    if (nomeProfile.length > lengthName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const nomes = nomeProfile;
  return (
    <div className="App">
      <h1 data-testid="top-title">Perfil</h1>
      <div className="form">
        <label htmlFor="name-id">Nome</label>
        <input
          type="text"
          name="name"
          id="name-id"
          placeholder={ nomes }
          data-testid="profile-name-input"
          onChange={ handleChanged }
        />
        <label htmlFor="email-id">Email</label>
        <input
          type="email"
          id="email"
          name="email-id"
          placeholder={ emailProfile }
          data-testid="profile-email-input"
          readOnly
        />
        <button
          type="submit"
          data-testid="profile-save-btn"
          disabled={ disabled }
          onClick={ submitChange }
        >
          Cadastrar
        </button>
      </div>
    </div>

  );
};

export default Perfil;
