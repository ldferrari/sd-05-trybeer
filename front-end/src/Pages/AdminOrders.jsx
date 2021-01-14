import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  return (
    <Fragment>
      Admin - Orders
      <Link to="/admin/profile">Admin Profile</Link>
    </Fragment>
  );
};

export default AdminOrders;
