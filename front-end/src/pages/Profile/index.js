import React, { useContext, useState } from 'react';
// import axios from 'axios';
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
    alert(nomeProfile, emailProfile);
    // axios.post('http://localhost:3001/api/insert', {
    //   name: nomeProfile,
    // }).then(() => {
    //   alert('Sucesso!');
    // });
  };

  const handleChanged = (e) => {
    setNomeProfile(e.target.value);
    if(nomeProfile.length > 3){
      setDisable(false);
    }else {
      setDisable(true);
    }
  }

  let nomes = nomeProfile;
  return (
    <div className="App">
      <h1 data-testid="top-title">Perfil</h1>
      <div className='form'>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          placeholder={nomes}
          data-testid="profile-name-input"
          onChange={handleChanged}
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
          disabled={disabled}
          onClick={submitChange}>Cadastrar</button>
      </div>
    </div>

  );
};

export default Perfil;
