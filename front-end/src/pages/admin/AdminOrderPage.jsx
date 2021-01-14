import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import productsApi from '../../services/client/api';
import OrderCard from '../../components/admin/OrderCard';
import Menu from '../../components/client/Menu';
import '../../css/clientProductPage.css';

const AdminOrders = () => {

  return (
    <div>
      {/* <Menu title="TryBeer" /> */}
      <OrderCard />
    </div>
  );
};

export default AdminOrders;
