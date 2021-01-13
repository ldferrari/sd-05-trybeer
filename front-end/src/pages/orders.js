import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

import Sales from '../components/Sales';

export default function Orders() {
  const email = localStorage.getItem('email') || '';
  const token = localStorage.getItem('token') || '';
  return token && email ? (
    <div>
      <Header>Meus Pedidos</Header>
      <Sales />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
