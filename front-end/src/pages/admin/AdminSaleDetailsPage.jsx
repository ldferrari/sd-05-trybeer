import React, { useEffect } from 'react';
import MenuAdm from '../../components/admin/MenuAdm';
import getSaleById from '../../services/admin/getSaleById';

export default function AdminSaleDetailsPage() {
//const { id } = match.params;

useEffect(() => {
  getSaleById(1)
})

  return (
    <div>
      <MenuAdm />
      <div>Número do pedido e status</div>
      <button>Marcar pedido como entregue</button>
    </div>
  );
}
