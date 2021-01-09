import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import PropTypes from 'prop-types';

import { getUserDataAct } from '../Redux/Actions/user';

function Profile(props) {
  const { name, email, refreshUser } = props;

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <div className="container-main">
      <Header pathname={props.history.location.pathname} />
      <div className="container-page">
        <strong>Perfil</strong>
        <div>Nome: <span>{ name }</span></div>
        <div>Email: <span>{ email }</span></div>
      </div>
    </div>
  );
}

Profile.protoTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

Profile.defaultProps = {
  name: 'Loading...',
  email: 'Loading...',
};

const mapStateToProps = ({ userRequestReducer }) => ({
  name: userRequestReducer.userData.name,
  email: userRequestReducer.userData.email,
});

const mapDispatchToProps = (dispatch) => ({
  refreshUser: () => dispatch(getUserDataAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
