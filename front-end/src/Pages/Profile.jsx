import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';

import { getUserDataAct } from '../Redux/Actions/user';

function Profile({ history, userData }) {
  useEffect(() => {}, []); // lint pediu pra por o refreshUser
  const { name, email } = userData.user;
  return (
    <div className="container-main">
      <Header pathname={ history.location.pathname } />
      <div className="container-page">
        <strong>Perfil</strong>
        <div>
          <p>Nome :</p>
          <span>{ name }</span>
        </div>
        <div>
          <p>Email :</p>
          <span>{ email }</span>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ userRequestReducer }) => ({
  userData: userRequestReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  refreshUser: () => dispatch(getUserDataAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
