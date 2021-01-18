import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../components/header';
import AdminSideBar from '../../components/admin sidebar';
import './index.css';
import { getProfileInfo } from '../../services/requestAPI';

const PerfilAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    async function asyncMe() {
      const token = localStorage.getItem('token');
      const { data: { user } } = await getProfileInfo(token);
      setName(user.name);
      setEmail(user.email);
    }
    asyncMe();
  }, []);

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile-admin">
      <AdminSideBar />
      <div className="profile-admin-data">
      <h3>
        Nome:
      </h3>
      <h4 data-testid="profile-name">
        {name}
      </h4>
      <h3>
        Email:
      </h3>
      <h3 data-testid="profile-email">
        {email}
      </h3>
      </div>
    </div>

  );
};

export default PerfilAdmin;
