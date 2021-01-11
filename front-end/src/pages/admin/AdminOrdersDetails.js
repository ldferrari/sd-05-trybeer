import React, { useEffect, useState, useContext } from 'react';
import { getSaleDetails } from '../../services/fetch';
import AdminProductsList from '../../components/admin/AdminProductsList';
import AdminMenu from '../../components/admin/AdminMenu';
import OrderStatus from '../../components/admin/OrderStatus';
import TrybeerContext from '../../context/TrybeerContext';
import BtnStatus from '../../components/admin/BtnChangeStatus';

function AdminOrdersDetails() {
  const [saleNumber, setSaleNumber] = useState();
  const [saleDetails, setSaleDetails] = useState([]);
  const { totalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    const arrPath = window.location.pathname.split("/");
    const id = arrPath[3];

    getSaleDetails(id).then((response) => setSaleNumber(response[0].sale_id) || setSaleDetails(response));
  }, []);

  if (!saleNumber) return <div>Carregando...</div>

  return (
    <div>
      <AdminMenu />
      <div>
        <h2>Pedido <span id="sale-id" data-testid="order-number">{saleNumber}</span></h2>
        <OrderStatus id={saleNumber} />
      </div>
      <div>
        <ul>
          {saleDetails.map((sale, index) => <AdminProductsList key={index} sale={sale} />)}
        </ul>
        <span>Total: R$ {totalPrice}</span>
      </div>
      <BtnStatus id={saleNumber} />
    </div>
  );
}

export default AdminOrdersDetails;
