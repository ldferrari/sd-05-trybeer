import React, { useState } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
const fetch = require('../../services/fetch');

console.log()

function ClientProfile() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState(user.name);

  const myProfile = () => {
    return (
      <div>
        <ClientMenu title={'Meu perfil'} />
        Name:
        <div>
          <input
            data-testid="profile-name-input"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        Email:
        <div>
          <input
            data-testid="profile-email-input"
            value={user.email}
            readOnly
          />
        </div>
        <button
          data-testid="profile-save-btn"
          disabled={(user.name === name)}
          onClick={() => fetch.updateName(name, user.email)}>
          Salvar
        </button>
      </div>
    );
  };
  return myProfile();
}

export default ClientProfile;