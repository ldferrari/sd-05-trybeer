import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import ClientOrderCard from '../components/ClientOrderCard';
// import AdminOrderCard from '../components/AdminOrderCard';

export default function Orders() {
  const userData = JSON.parse(localStorage.getItem('user'));
  // const role = userData && userData.user && userData.user.role;
  const token = userData && userData.token;

  if (!token) return <Redirect to="/login" />;
  // return role === 'administrator' ? (
  //   <section>
  //     <Header title="Pedidos Pendentes" />
  //     <AdminOrderCard token={ token } />
  //   </section>
  // ) : (
  return (
    <section>
      <Header title="Meus Pedidos" />
      <ClientOrderCard />
    </section>
  );
}
