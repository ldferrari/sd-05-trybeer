import React from 'react';
import { Redirect } from 'react-router-dom';
// import Menu from '../../components/client/Menu';

export default function ClientDetailsOrderPage() {
  const token = localStorage.getItem('token') || null;

  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      {/* <Menu title="Cliente - Detalhes de Pedido" /> */}
      <div data-testid="0-order-card-container">
        <p data-testid="0-order-number">Pedido 00</p>
      </div>
    </div>
  );
}
