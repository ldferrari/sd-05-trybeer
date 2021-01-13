import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AdminMenu from '../../components/admin/AdminMenu';

function AdminProfile() {
  const [isLogged, setIsLogged] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('user'));

    if (!userLocal) {
      setIsLogged(false);
    } else {
      setUser(userLocal);
    }
  }, []);

  if (!isLogged) return <Redirect to="/login" />;

  if (!user) return <div>Carregando...</div>;

  return (
    <div>
      <AdminMenu />
      <h2>Perfil</h2>
      <div data-testid="profile-name">
        { `Nome: ${user.name}` }
      </div>
      <div data-testid="profile-email">
        { `Email: ${user.email}` }
      </div>
    </div>
  );
}

export default AdminProfile;
