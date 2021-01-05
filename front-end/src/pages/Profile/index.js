import React, { useState } from 'react';
import './index.css';

const Perfil = () => {
  const [nomeProfile, setNomeProfile] = useState('Artur Pirashkov');
  const [emailProfile, setEmailProfile] = useState('email@email.com');

  const submitChange = async () => {
    alert(nomeProfile, emailProfile);
    // axios.post('http://localhost:3001/api/insert', {
    //   name: nomeProfile,
    // }).then(() => {
    //   alert('Sucesso!');
    // });
  };

  return (
    <div className="App">
      <h1 data-testid="top-title">Perfil</h1>
      <div className='form'>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          placeholder={nomeProfile}
          data-testid="profile-name-input"
          onChange={(e) => setNomeProfile(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder={emailProfile}
          data-testid="profile-email-input"
          readOnly />
        <button
          type="submit"
          data-testid="profile-save-btn"
          disabled={!(nomeProfile.length > 3)}
          onClick={submitChange}>Cadastrar</button>
      </div>
    </div>

  );
};

export default Perfil;
