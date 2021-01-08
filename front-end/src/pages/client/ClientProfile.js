import React, { useState } from 'react';

function ClientProfile() {
  let client = {
    name: 'Jorgin Silva',
    email: 'jorge123@gmail.com',
  };

  // teste acima simulando o recebimento de informações do back

  const [name, setName] = useState(true);

  const myProfile = () => {
    return (
      <div>
        <h1 data-testid="top-title">Meu Perfil</h1>
        Name:
        <div>
          <input
            data-testid="profile-name-input"
            defaultValue={client.name}
            onChange={(e) => setName(e.target.value === client.name)}
            type="text"
          />
        </div>
        Email:
        <div>
          <input
            data-testid="profile-email-input"
            value={client.email}
            readOnly
          />
        </div>
        <button data-testid="profile-save-btn" disabled={name}>
          Salvar
        </button>
      </div>
    );
  };
  return myProfile();
}

export default ClientProfile;