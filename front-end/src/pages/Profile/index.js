import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './index.css';

import { getProfileInfo, postProfileInfo } from '../../services/requestAPI';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Perfil = () => {
  const [name, setName] = useState('');
  const [initialName, setInitialName] = useState('');
  const [alertUpdate, setAlertUpdate] = useState('');
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState('');
  // const [tokenLogged, setTokenLogged] = useState('');

  useEffect(() => {
    async function asyncMe() {
      const token = localStorage.getItem('token');
      const { data: { user } } = await getProfileInfo(token);
      setName(user.name);
      setEmail(user.email);
      setInitialName(user.name);
      // setTokenLogged(token);
    }
    asyncMe();
  }, []);

  useEffect(() => {
    const validationName = (value) => (/^[A-Za-z \s]{12,}$/.test(value) && value !== initialName ? setValidName(true) : setValidName(false));
    validationName(name);
  }, [name, initialName]);

  const handleChanged = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setAlertUpdate('Atualização concluída com sucesso');
    await postProfileInfo(token, name, email);
    /* const tempo = 10000;
    setTimeout(() => {
      setAlertUpdate('Atualização concluída com sucesso');
    }, tempo); */
  };
  const nomes = name;

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="ProfilePage">
      <Header>Meu Perfil</Header>
      <h2 data-testid="top-title">Meu perfil</h2>
      <div className="form">
        <p>Nome:</p>
        <input
          type="text"
          name="name"
          id="name-id"
          value={ nomes }
          data-testid="profile-name-input"
          onChange={ handleChanged }
        />
        <p>E-mail:</p>
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
          className={ (validName) ? 'ready loginBtn' : '' }
          onClick={ handleSubmit }
        >
          Salvar
        </button>
      </div>
      <Footer />
    </div>

  );
};

export default Perfil;
