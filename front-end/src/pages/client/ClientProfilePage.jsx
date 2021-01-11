import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import Menu from '../../components/client/Menu';
import GeneralContext from '../../context/general/GeneralContext';
// import updateUserAPI from '../../services/apis';

export default function ClientProfilePage() {
  /*  useEffect(() => {
    return () => {
      document.title = 'BLA';
    };
  }); */

  const { userData, setUserData, loggedIn } = useContext(GeneralContext);
  const userEmail = JSON.parse(localStorage.getItem('user')).email || { email: '' };
  const userName = JSON.parse(localStorage.getItem('user')).name || { name: '' };
  const [nameEqual, setNameEqual] = useState(false)

  /* function fetchAPI(id) {
    return updateUserAPI(id);
  } */

  //if (!loggedIn) return <Redirect to="/login" />;
  const handleChange = (e) => {
    validateName(setUserData({ name: e.target.value }));
    if (e.target.value === userName) {
      setNameEqual(true);
    }
  }

  return (
    <div>
      <Menu title="Meu perfil" data-testid="top-title" />
      <label htmlFor="email">
        Email
        <input
          data-testid="profile-email-input"
          type="text"
          id="email"
          name="email"
          value={ userEmail }
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
          value= { userData.name }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="profile-save-btn"
        type="button"
        // onClick={() => fetchAPI(id)}
        // segundo name vai vir da tela de login para comparar
        disabled={ nameEqual }
      >
        Salvar
      </button>
    </div>
  );
}
