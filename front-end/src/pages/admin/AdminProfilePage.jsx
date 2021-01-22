import React from 'react';
import { Redirect } from 'react-router-dom';
import MenuAdm from '../../components/admin/MenuAdm';
import '../../css/admin/adminProfilePage.css';

export default function ClientProfilePage() {
  const token = localStorage.getItem('token') || null;
  const user = JSON.parse(localStorage.getItem('user')) || null;

  if (!token) return <Redirect to="/login" />;

  return (
    <div className="admProfileBody">
      <MenuAdm />
      <div className="admProfileTitle">Admin - Perfil</div>
      <div className="amdProfileLabels">
        <label htmlFor="email" className="admProfileLabel">
          Email
          <div
            data-testid="profile-email"
            className="admProfileLabelDate"
            id="email"
            readOnly
          >
            { user.email }
          </div>
        </label>
        <label htmlFor="name" className="admProfileLabel">
          Name
          <div
            data-testid="profile-name"
            className="admProfileLabelDate"
            id="name"
            readOnly
          >
            { user.name }
          </div>
        </label>
      </div>
    </div>
  );
}
