import React, { useState } from 'react';
import './index.css';

const Perfil = () => {
  const [nomeProfile, setNomeProfile] = useState('');

  return (
    <div className="flexbox-container ">
      <h1 data-testid="top-title">Perfil</h1>
      <form>
        <label htmlFor='name'
          className='name-label'>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="name"
            data-testid="profile-name-input"
            onChange={(e) => setNomeProfile(e.target.value)}
          />
        </label>
        <label htmlFor='email'
          className='email-label'>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="email"
            data-testid="profile-email-input"
            readOnly />
        </label>
        <button
          type="submit"
          className="salvar-btn"
          data-testid="profile-save-btn"
          disabled={!(nomeProfile.length > 3)}>Cadastrar</button>
      </form>
    </div>

  );
};

export default Perfil;
