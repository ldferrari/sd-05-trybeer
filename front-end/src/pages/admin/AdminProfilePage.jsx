import React from 'react';
import { Redirect } from 'react-router-dom';
import MenuAdm from '../../components/admin/MenuAdm';

export default function ClientProfilePage() {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <MenuAdm />
      <div>Admin - Perfil</div>
      <div className="bodyProfile">
        <label htmlFor="email" className="labelProfile">
          Email
          <div
            data-testid="profile-email"
            id="email"
            className="inputProfile"
            readOnly
          >
            { user.email }
          </div>
        </label>
        <label htmlFor="name" className="labelProfile">
          Name
          <div
            data-testid="profile-name"
            id="name"
            className="inputProfile"
            readOnly
          >
            { user.name }
          </div>
        </label>
      </div>
    </div>
  );
}
