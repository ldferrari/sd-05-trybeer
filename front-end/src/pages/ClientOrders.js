import React from 'react';
import ClientCard from '../components/ClientCard';
import Header from '../components/Header';
import { getCart } from '../services/localStorage';

export default function ClientOrders() {
  return (
    <Header title="Meus Pedidos" data-testid="top-title" />,
    getCart().map((order, index) => (
      <ClientCard data-testid={ `${index}-order-card-container` } key={ `${index}` } />
    ))
  );
}
