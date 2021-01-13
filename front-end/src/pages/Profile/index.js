
import Header from '../../components/header';
import React, { useEffect, useState } from 'react';

import './index.css';
import { getProfileInfo, postProfileInfo } from '../../services/requestAPI';

const Perfil = () => {
  const [name, setName] = useState('');
  const [initialName, setInitialName] = useState('');
  const [alertUpdate, setAlertUpdate] = useState('');
  const [validName, setValidName] = useState(false);
  const validationName = (value) => (/^[A-Za-z \s]{12,}$/.test(value) && value !== initialName ? setValidName(true) : setValidName(false));
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');
  
  useEffect(async () => {
    console.log(token)
    const { data:{ user } } = await getProfileInfo(token);
    setName(user.name)
    setEmail(user.email)
    setInitialName(user.name)
  }, []);

  useEffect(()=>{ validationName(name);
  }, [name, initialName]);

  const handleChanged = (e) => {
    setName(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('pos default')
    setAlertUpdate('Atualização concluída com sucesso');
    await postProfileInfo(token,name, email);
    /* const tempo = 10000;
    setTimeout(() => {
      setAlertUpdate('Atualização concluída com sucesso');
    }, tempo); */
  };
  const nomes = name;
  return (
    <div className="App">
      <Header>Meu perfil</Header>
      <h1 data-testid="top-title">Meu perfil</h1>
      <div className="form">
        <p>Name</p>
        <input
          type="text"
          name="name"
          id="name-id"
          value={ nomes }
          data-testid="profile-name-input"
          onChange={ handleChanged }
        />
        <p>Email</p>
        <input
          type="email"
          id="email"
          name="email-id"
          value={ email }
          data-testid="profile-email-input"
          readOnly
        />
        <span className="update-alert">{alertUpdate}</span>
        <button
          type="submit"
          data-testid="profile-save-btn"
          disabled={ !(validName) }
          className={ (validName) ? 'ready' : '' }
          onClick={ handleSubmit }
        >
          Salvar
        </button>
      </div>
    </div>

  );
};

export default Perfil;
