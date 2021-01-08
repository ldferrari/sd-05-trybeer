import React from 'react';
import Header from '../Components/Header';

function Profile(props) {
  return (
    <div>
      <Header pathname={props.history.location.pathname} />
      Profile
    </div>
  );
}

export default Profile;
