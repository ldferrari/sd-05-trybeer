import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

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
    <div className="App">
      <AdminSideBar />
      <div className="adminData">
      <h3 data-testid="profile-name">
        Nome:
        {name}
      </h3>
      <h3 data-testid="profile-email">
        Email:
        {email}
      </h3>
    </div>
    </div>
  );
};

export default PerfilAdmin;
