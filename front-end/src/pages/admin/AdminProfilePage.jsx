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
        <label htmlFor="email" className="labelProfile">
          Email
          <input
            data-testid="profile-email"
            className="inputProfile"
            type="text"
            id="email"
            name="email"
            value={ user.email }
            readOnly
          />
        </label>
        <label htmlFor="name" className="labelProfile">
          Name
          <input
            data-testid="profile-name"
            className="inputProfile"
            type="text"
            id="name"
            name="name"
            value={ user.name }
            readOnly
          />
        </label>
      </div>
    </div>
  );
}