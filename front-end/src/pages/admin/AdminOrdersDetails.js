import React, { useEffect, useState } from 'react';
import { getSaleDetails } from '../../services/fetch';
import AdminProductsList from '../../components/admin/AdminProductsList';
import AdminMenu from '../../components/admin/AdminMenu';

function AdminOrdersDetails() {
  const [saleNumber, setSaleNumber] = useState();
  const [saleDetails, setSaleDetails] = useState([]);

  useEffect(() => {
    const arrPath = window.location.pathname.split("/");
    const id = arrPath[3];

    getSaleDetails(id).then((response) => setSaleNumber(response[0].sale_id) || setSaleDetails(response));

  }, []);
  return (
    <div>
      <AdminMenu />
      <h2>Pedido <span data-testid="order-number">{saleNumber}</span></h2>
      <div>
        <ul>
          {saleDetails.map((sale, index) => <AdminProductsList key={index} sale={sale} />)}
        </ul>
      </div>
    </div>
  );
}

export default AdminOrdersDetails;
