import React, { useState } from 'react';
import validateName from '../../services/general/validateName';
import Menu from '../../components/client/Menu';

export default function ClientProfilePage() {
  /*  useEffect(() => {
    return () => {
      document.title = 'BLA';
    };
  }); */

  const [email] = useState('email@email.com');
  const [name, setName] = useState('Mau');

  const handleChange = (e) =>
   {
      return validateName(setName(e.target.value));
    };

  return (
    <div>
      <Menu title={ 'Meu perfil' } />
      <div data-testid="top-title">Meu perfil</div>
      <label htmlFor="email">
        Email
        {/* campos email e name, o value vai puxar do login ou do localstorage */}
        <input
          data-testid="profile-email-input"
          type="text"
          id="email"
          name="email"
          value={ email }
          readOnly
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          data-testid="profile-name-input"
          type="text"
          id="name"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="profile-save-btn"
        type="button"
        // segundo name vai vir da tela de login para comparar
        disabled={ name ? true : false }
      >
        Salvar
      </button>
    </div>
  );
}
