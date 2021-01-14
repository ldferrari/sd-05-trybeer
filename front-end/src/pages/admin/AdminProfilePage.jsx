import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ClientProfilePage() {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <div>Admin - Perfil</div>
      <div className="bodyProfile">
        <label className="labelProfile">
          Email
          <div
            data-testid="profile-email"
            className="inputProfile"
            readOnly
          >
            { user.email }
          </div>
        </label>
        <label className="labelProfile">
          Name
          <div
            data-testid="profile-name"
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
