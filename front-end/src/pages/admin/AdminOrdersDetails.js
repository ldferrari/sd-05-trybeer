import React, { useEffect, useState } from 'react';
import { getSaleDetails, getProductById } from '../../services/fetch';

function AdminOrdersDetails() {
  const [saleNumber, setSaleNumber] = useState();
  const [saleDetails, setSaleDetails] = useState([]);

  useEffect(() => {
    const arrPath = window.location.pathname.split("/");
    const id = arrPath[3];
    getSaleDetails(id).then((response) => console.log(response) || setSaleNumber(response[0].sale_id) || setSaleDetails(response));

  }, []);
  return (
    <div>
      <h2>Pedido <span data-testid="order-number">{saleNumber}</span></h2>
      <div>
        <ul>
          {saleDetails.map((sale, index) => <li key={index}>{sale.product_id}-{sale.quantity}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default AdminOrdersDetails;
