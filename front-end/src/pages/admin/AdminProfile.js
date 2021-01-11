import React from 'react';

function AdminProfile() {
  let admin = {
    name: 'Jorgin Silva',
    email: 'jorge123@gmail.com',
  };

  const myProfile = () => {
    return (
      <div>
        <h1>Perfil</h1>
        <div data-testid="profile-name">Nome: { admin.name }</div>
        <div>Email: { admin.email }</div>
      </div>
    );
  };
  return myProfile();
}

export default AdminProfile;
