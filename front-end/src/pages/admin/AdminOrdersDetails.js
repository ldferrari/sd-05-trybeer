import React, { useEffect, useState } from 'react';
import { getSaleDetails } from '../../services/fetch';

function AdminOrdersDetails() {
  const [saleDetails, setSaleDetails] = useState([]);

  useEffect(() => {
    const arrPath = window.location.pathname.split("/");
    const id = arrPath[3];

    getSaleDetails(id).then((response) => setSaleDetails(response));
    console.log(saleDetails);
  }, []);
  return (
    <div>AdminOrdersDetails: condicionar entre Delivered e Pending</div>
  );
}

export default AdminOrdersDetails;
