import React, { useState } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { updateName } from '../../services/fetch';
import { checkName } from '../../services/checkUserData'

console.log()

function ClientProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email, token, role } = user;

  const [name1, setName1] = useState(name);
  const [checkedName, setcheckedName] = useState(false);
  // const { setName } = useContext(TrybeerProvider);

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
      <div className="div-container-products yellow-background">
        <ClientMenu title={'Meu perfil'} />
        <div className="form-container">
          <h3 className="white-text">Name</h3>
          <input
          className="input-layout"
            data-testid="profile-name-input"
            defaultValue={name}
            onChange={(e) => handleNameChange(e.target.value)}
            type="text"
            />
       
          <h3 className="white-text">Email</h3>
          <input data-testid="profile-email-input" value={email} readOnly className="input-layout" />
      
        <button
        className="btn-style white-text"
          data-testid="profile-save-btn"
          disabled={(name === name1)}
          /*disabled={name}*/ onClick={() =>
            updateName(name1, email).then((result) =>
            saveInStorage(result.name),
            document.getElementById('update').innerHTML = 'Atualização concluída com sucesso'
            )
          }
          >
          Salvar
        </button>
        <div id="update"></div>
        </div>
      </div>
    );
  };
  return myProfile();
}

export default ClientProfile;
