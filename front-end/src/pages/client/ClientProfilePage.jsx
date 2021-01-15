import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import Menu from '../../components/client/Menu';
import GeneralContext from '../../context/general/GeneralContext';
import updateUserNameAPI from '../../services/general/fetchUpdateUser';
import '../../css/client/clientProfilePage.css';

export default function ClientProfilePage() {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;
  const { setUserData } = useContext(GeneralContext);
  const [nameEqual, setNameEqual] = useState(true);
  const [localName, setLocalName] = useState(user.name);
  const [apiSuccess, setApiSuccess] = useState(false);

  if (!token) return <Redirect to="/login" />;

  const handleChange = (e) => {
    setNameEqual(false);
    validateName(setLocalName(e.target.value));
    if (e.target.value === user.name) {
      setNameEqual(true);
    }
  };

  const handleClick = async () => {
    setUserData({
      ...user,
      name: localName,
    });
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: user.email,
        name: localName,
        role: user.role,
      }),
    );
    const api = await updateUserNameAPI(user.id, {
      ...user,
      name: localName,
    });
    if (api.message === 'success') {
      setApiSuccess(true);
    }
  };

  return (
    <div>
      <Menu title="Meu perfil" data-testid="top-title" />
      <div className="bodyProfile">
        <label htmlFor="email" className="labelProfile">
          Email
          <input
            data-testid="profile-email-input"
            className="inputProfile"
            type="text"
            id="email"
            name="email"
            value={ user.email }
            readOnly
          />
        </label>
        <label htmlFor="name" className="labelProfile">
          Name
          <input
            data-testid="profile-name-input"
            className="inputProfile"
            type="text"
            id="name"
            name="name"
            value={ localName }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="profile-save-btn"
          className="salvar"
          type="button"
          onClick={ handleClick }
          disabled={ nameEqual }
        >
          Salvar
        </button>
      </div>
      {apiSuccess && <div className="sucesso">Atualização concluída com sucesso</div>}
    </div>
  );
}
