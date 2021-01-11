import React, { useContext, useState } from 'react';
import TrybeerProvider from '../../context/TrybeerProvider';
import { updateName } from '../../services/fetch';
import { checkName } from '../../services/checkUserData'

function ClientProfile() {
  let client = {
    name: 'Jorgin Silva',
    email: 'jorge123@gmail.com',
  };

  // teste acima simulando o recebimento de informações do back

  const [name1, setName1] = useState(true);
  const [checkedName, setcheckedName] = useState(false)
  // const { setName } = useContext(TrybeerProvider);

  const user = JSON.parse(localStorage.getItem('user'));

  const { name, email, token, role } = user;

  const saveInStorage = (name) => {
    localStorage.setItem(
      'user',
      JSON.stringify({ name: name, email, token, role })
    );
  };

  const handleNameChange = (name2) => {
    setcheckedName(checkName(name2))
    if (checkedName) {
      setName1(name2)
    }
  }

  const myProfile = () => {
    return (
      <div>
        <h1 data-testid="top-title">Meu Perfil</h1>
        Name:
        <div>
          <input
            data-testid="profile-name-input"
            defaultValue={name}
            onChange={(e) => handleNameChange(e.target.value)}
            type="text"
          />
        </div>
        Email:
        <div>
          <input data-testid="profile-email-input" value={email} readOnly />
        </div>
        <button
          data-testid="profile-save-btn"
          /*disabled={name}*/ onClick={() =>
            updateName(name1, email).then((result) =>
              saveInStorage(result.name)
            )
          }
        >
          Salvar
        </button>
      </div>
    );
  };
  return myProfile();
}

export default ClientProfile;
