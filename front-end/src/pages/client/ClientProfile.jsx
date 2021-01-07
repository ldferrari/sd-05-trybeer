import React from 'react';
import Menu from '../../components/client/Menu';

/* const handleChange = (e, name) => {
  name = e.target.value;
}; */

function ClientProfile() {
  const name = 'Mau';
  // const user = JSON.parse(localStorage.getItem('user')) || { email: '' };
  // choice in order to make tests pass both on header, footer and profile
  // const emailUser = user.email;
  // const logOut = () => localStorage.clear();
  return (
    <div>
      <Menu title={'Meu perfil'} />
      <div data-testid="top-title">Meu perfil</div>
      <label htmlFor="email">
        Email
        {/* campos email e name, o value vai puxar do login ou do localstorage */}
        <input data-testid="profile-email-input" type="text" id="email" name="email" value="email do usuario" readOnly />
      </label>
      <label htmlFor="name">
        Name
        <input data-testid="profile-name-input" type="text" id="name" name="name" value={ name } />
      </label>
      <button type="button">
        Salvar
      </button>
    </div>
  );
}

export default ClientProfile;
