import React from 'react';
import MenuAdm from '../../components/admin/MenuAdm';

export default function AdminPedidosPendentes() {
  return (
    <div>
      <MenuAdm />
      <div>Número do pedido e status</div>
      <button>Marcar pedido como entregue</button>
    </div>
  );
}
