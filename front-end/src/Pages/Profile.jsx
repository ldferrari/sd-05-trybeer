import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';

import { getUserDataAct } from '../Redux/Actions/user';

function Profile({
  name, email, refreshUser, history,
}) {
  useEffect(() => {
    refreshUser();
  }, [refreshUser]); // lint pediu pra por o refreshUser

  return (
    <div className="container-main">
      <Header pathname={ history.location.pathname } />
      <div className="container-page">
        <strong>Perfil</strong>
        <div>
          <p>Nome:</p>
          <span>{ name }</span>
        </div>
        <div>
          <p>Email:</p>
          <span>{ email }</span>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  refreshUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ userRequestReducer }) => ({
  name: userRequestReducer.userData.name,
  email: userRequestReducer.userData.email,
});

const mapDispatchToProps = (dispatch) => ({
  refreshUser: () => dispatch(getUserDataAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
