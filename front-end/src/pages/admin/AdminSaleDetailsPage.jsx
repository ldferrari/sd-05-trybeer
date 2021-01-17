import React, { useState, useEffect } from 'react';
import MenuAdm from '../../components/admin/MenuAdm';
import getSaleById from '../../services/admin/getSaleById';

export default function AdminSaleDetailsPage() {
//const { id } = match.params;
const [saleDetails, setSaleDetails] = useState([]);

  useEffect(() => {
    getSaleById(1).then((response) => setSaleDetails(response));
  }, []);

  return (
    <div>
      {/* <MenuAdm /> */}
      <div>
       Pedido { saleDetails.delivery_number} - { saleDetails.status }
      </div>
      <div>
        Total: R$ { saleDetails.total_price }
      </div>
      <button>Marcar pedido como entregue</button>
    </div>
  );
}
