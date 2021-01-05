import React from 'react';

const handleChange = (e, name) => {
  name = e.target.value;
}

function ClientProfile() {
  const user = JSON.parse(localStorage.getItem('user')) || { email: '' };
  // choice in order to make tests pass both on header, footer and profile
  const emailUser = user.email;
  const logOut = () => localStorage.clear();
  return (
    <div>
      <div data-testid="top-title">Meu perfil</div>
      <label for="email">Email</label>
      {/* campos email e name, o value vai puxar do login ou do localstorage */}
      <input data-testid="profile-email-input" type="text" id="email" name="email" value="email do usuario" readonly />
      <label for="name">Name</label>
      <input data-testid="profile-name-input" type="text" id="name" name="name" value={name}/>
      <button>
        Salvar
      </button>
    </div>
  );
}

export default ClientProfile;
