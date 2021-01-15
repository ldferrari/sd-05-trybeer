import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AdminProfile = ({ userData }) => {
  if (!userData.user) {
    return <Redirect to="/login" />;
  }

  // getlocalStorage - pegar funcao do luis para solução MUNDO REAL --

  const { name, email } = userData.user;
  return (
    <>
      <h3>Perfil</h3>
      <p>Nome: </p>
      <p data-testid="profile-name">
        {name}
      </p>
      <p>Email: </p>
      <p data-testid="profile-email">{email}</p>
    </>
  );
};

AdminProfile.propTypes = {
  userData: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.userRequestReducer.userData,
});

export default connect(mapStateToProps)(AdminProfile);
