import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import DarkModeBtn from '../../components/DarkModeBtn';
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
    <div className="profile-container yellow-background">
      <AdminMenu />
      <div className="content-admin-profile">
      <h2 className="white-text">Perfil</h2>
      <div data-testid="profile-name">
       <h4 className="white-text">
         { `Nome: ${user.name}` }
         </h4> 
      </div>
      <div data-testid="profile-email">
        <h4 className="white-text">
        { `Email: ${user.email}` }
        </h4>
      </div>
      </div>
      <DarkModeBtn />
    </div>
  );
}

export default AdminProfile;
