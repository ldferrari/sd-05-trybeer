import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import Menu from '../../components/client/Menu';
import GeneralContext from '../../context/general/GeneralContext';
import updateUserNameAPI from '../../services/apis';

export default function ClientProfilePage() {
  const { userData, setUserData, loggedIn } = useContext(GeneralContext);
  const [nameEqual, setNameEqual] = useState(true)
  const [localName, setLocalName] = useState(userData.name)
  const [apiSuccess, setApiSuccess] = useState(false)

  if (!loggedIn) return <Redirect to="/login" />;

  const handleChange = (e) => {
    setNameEqual(false);
    validateName(setLocalName(e.target.value));
    if (e.target.value === userData.name) {
      setNameEqual(true);
    }
  }

  const handleClick = async() => {
    setUserData({ ...userData, name: localName });
    localStorage.setItem("user", JSON.stringify({ email: userData.email, name: localName, role: userData.role }));
    const api = await updateUserNameAPI(userData.id, { ...userData, name: localName } );
    if (api.message === 'success') {
      setApiSuccess(true)
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
          value={ userData.email }
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
          value= { localName }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="profile-save-btn"
        type="button"
        onClick={ handleClick }
        disabled={ nameEqual }
      >
        Salvar
      </button>
      {apiSuccess&& <div>Atualização concluída com sucesso</div>}
    </div>
  );
}
