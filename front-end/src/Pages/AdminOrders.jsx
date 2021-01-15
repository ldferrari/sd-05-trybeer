import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminOrders = () => (
  <>
    Admin - Orders
    <Link to="/admin/profile" data-testid="side-menu-item-profile">Admin Profile</Link>
  </>
);

export default AdminOrders;
