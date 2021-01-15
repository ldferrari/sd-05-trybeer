import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';

import { getUserDataAct, updateUserAct } from '../Redux/Actions/user';

const changeInput = (event, setFunction) => setFunction(event.target.value);

function Profile({ history, userData, updateUser }) {
  const [id] = useState(userData.user.id || '');
  const [email] = useState(userData.user.email || '');
  const [name, setName] = useState(userData.user.name || '');
  const [shouldRefresh, setShouldRefresh] = useState(false);

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
            value={ name }
            onChange={ (event) => changeInput(event, setName) }
          />
          <p>Email :</p>
          <input
            type="email"
            data-testid="profile-email-input"
            value={ email }
            readOnly
          />
        </form>
        <button
          disabled={ userData.user.name === name }
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
  userData: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = ({ userRequestReducer }) => ({
  userData: userRequestReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  refreshUser: () => dispatch(getUserDataAct()),
  updateUser: (data) => dispatch(updateUserAct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
