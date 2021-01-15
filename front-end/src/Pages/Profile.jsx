import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Restrict from '../Components/Restrict';

import { getUserData } from '../Services/utils';
import { updateUserAct } from '../Redux/Actions/user';

const changeInput = (event, setFunction) => setFunction(event.target.value);

function Profile({ history, updateUser }) {

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [changed, setChanged] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    const user = getUserData();
    if(!user) return;
    setId(user.id);
    setEmail(user.email);
    setName(user.name);
  }, []);

  return (
    <div className="container-main">
      <Header pathname={ history.location.pathname } />
      <div className="container-page">
        <strong>Perfil</strong>
        <form>
          <p>Nome :</p>
          <input
            type="text"
            data-testid="profile-name-input"
            value={name}
            onChange={ (event) => {
              changeInput(event, setName);
              setChanged(true);
            }}
          />
          <p>Email :</p>
          <input
            type="email"
            data-testid="profile-email-input"
            value={email}
            readOnly
          />
        </form>
        <button
          disabled={!changed}
          data-testid="profile-save-btn"
          onClick={ () => {
            updateUser({ id, name });
            setShouldRefresh(true);
          } }
          type="button"
        >
          Salvar
        </button>
        {shouldRefresh && <p>Atualização concluída com sucesso</p>}
      </div>
    </div>
  );
}

Profile.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUserAct(data)),
});

export default connect(() => {}, mapDispatchToProps)(Profile);
