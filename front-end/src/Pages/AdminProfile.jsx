import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AdminSideBar from '../Components/AdminSideBar';

import Restrict from '../Components/Restrict';

const AdminProfile = ({ userData }) => {
  const { name, email } = userData.user;
  return (
    <Restrict>
      <AdminSideBar />
      <h3>Perfil</h3>
      <p>Nome: </p>
      <p data-testid="profile-name">
        {name}
      </p>
      <p>Email: </p>
      <p data-testid="profile-email">{email}</p>
    </Restrict>
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
