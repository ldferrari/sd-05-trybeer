import React from 'react';

function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email } = user;
  const myProfile = () => {
    return (
      <div>
        <h1>Perfil</h1>
        <div data-testid="profile-name">Nome: { name }</div>
        <div>Email: { email }</div>
      </div>
    );
  };
  return myProfile();
}

export default AdminProfile;
