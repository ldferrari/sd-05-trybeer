import React, { useState } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { updateName } from '../../services/fetch';
import { checkName } from '../../services/checkUserData';

// console.log();

function ClientProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const {
    name, email, token, role,
  } = user;

  const [name1, setName1] = useState(name);
  const [checkedName, setcheckedName] = useState(false);
  // const { setName } = useContext(TrybeerProvider);

  const saveInStorage = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        name, email, token, role,
      }),
    );
  };

  const handleNameChange = (name2) => {
    setcheckedName(checkName(name2));
    if (checkedName) {
      setName1(name2);
    }
  };

  const myProfile = () => (
    <div>
      <ClientMenu title="Meu perfil" />
      Name:
      <div>
        <input
          data-testid="profile-name-input"
          defaultValue={ name }
          onChange={ (e) => handleNameChange(e.target.value) }
          type="text"
        />
      </div>
      Email:
      <div>
        <input data-testid="profile-email-input" value={ email } readOnly />
      </div>
      <button
        type="button"
        data-testid="profile-save-btn"
        disabled={ (name === name1) }
        onClick={ () => {
          updateName(name1, email).then((result) => saveInStorage(result.name),
            document.getElementById('update').innerHTML = 'Atualização concluída com sucesso');
        } }
      >
        Salvar
      </button>
      <div id="update" />
    </div>
  );
  return myProfile();
}

export default ClientProfile;
