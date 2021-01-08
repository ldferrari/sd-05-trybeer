import React, { useState } from 'react';
import validateName from '../../services/general/validateName';
import Menu from '../../components/client/Menu';
// import updateUserAPI from '../../services/apis';

export default function ClientProfilePage(props) {
  /*  useEffect(() => {
    return () => {
      document.title = 'BLA';
    };
  }); */

  const [email] = useState('email@email.com');
  const [name, setName] = useState('Mau');
  //const id = props.match.params.id;

  /* function fetchAPI(id) {
    return updateUserAPI(id);
  } */

  const handleChange = (e) => validateName(setName(e.target.value));

  return (
    <div>
      <Menu title="Meu perfil" data-testid="top-title" />
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
        //onClick={() => fetchAPI(id)}
        // segundo name vai vir da tela de login para comparar
        disabled
      >
        Salvar
      </button>
    </div>
  );
}