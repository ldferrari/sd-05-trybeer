import React, { useEffect, useState } from 'react';

import Header from '../../components/header';
import './index.css';
import { getProfileInfo  } from '../../services/requestAPI';

const PerfilAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function asyncMe() {
      const token = localStorage.getItem('token');
      const { data: { user } } = await getProfileInfo(token);
      setName(user.name);
      setEmail(user.email);
      setInitialName(user.name);
    }
    asyncMe();
  }, []);

  const nomes = name;
  return (
    <div className="App">
      <Header>Meu perfil</Header>
      <h3 data-testid="profile-name">{nome}</h3>
      <h3 data-testid="profile-email">{email}</h3>
    </div>
  );
};

export default PerfilAdmin;
