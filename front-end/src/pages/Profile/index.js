import axios from 'axios';
import Header from '../../components/header';
import AppContext from '../../context/AppContext';
import React, { useEffect, useState } from 'react';

import './index.css';
import { getProfileInfo, postProfileInfo } from '../../services/requestAPI';

const Perfil = () => {
  const [disabled, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');

  useEffect(async () => {
    console.log(token)
    const info = await getProfileInfo(token);
    console.log(info)
  }, []);

  const handleChanged = (e) => {
    setName(e.target.value);
    const lengthName = 3;
    if (name.length > lengthName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const nomes = name;
  return (
    <div className="App">
      <Header>Profile</Header>
      <h1 data-testid="top-title">Perfil</h1>
      <div className="form">
        <p>Nome</p>
        <input
          type="text"
          name="name"
          id="name-id"
          placeholder={ nomes }
          data-testid="profile-name-input"
          onChange={ handleChanged }
        />
        <p>Email</p>
        <input
          type="email"
          id="email"
          name="email-id"
          placeholder={ email }
          data-testid="profile-email-input"
          readOnly
        />
        <button
          type="submit"
          data-testid="profile-save-btn"
          disabled={ disabled }
          onClick={ postProfileInfo }
        >
          Cadastrar
        </button>
      </div>
    </div>

  );
};

export default Perfil;
