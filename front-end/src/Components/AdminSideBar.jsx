import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return ( <div> admin side bar

<Link to="/admin/profile" data-testid="side-menu-item-profile">Admin Profile</Link>

  </div> );
}
 
export default AdminSideBar;