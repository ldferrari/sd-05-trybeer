import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AdminProfile = ({ userData }) => {
  if (!userData.user) {
    return <Redirect to="/login" />;
  }
  const { name, email } = userData.user;
  return (
    <Fragment>
      <h3>Admin - Profile</h3>
      <p>Nome: </p>
      <p>{name}</p>
      <p data-testid="profile-name">Email: </p>
      <p data-testid="profile-email">{email}</p>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userRequestReducer.userData,
});

export default connect(mapStateToProps)(AdminProfile);
