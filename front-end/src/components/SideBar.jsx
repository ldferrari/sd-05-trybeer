import React from 'react';
// import { HamburgerIcon } from '@chakra-ui/icons'; NÂO ESQUECER DE INSTALAR DEP

import { Link } from 'react-router-dom';

const client = () => {
  return (
    // <div icon={<HamburgerIcon />} data-testid="top-hamburguer">
      <ul>
        <Link to="products">
          <li data-testid="side-menu-item-products">Produtos</li>
        </Link>
        <Link to="orders">
          <li data-testid="side-menu-item-my-orders">Meus pedidos</li>
        </Link>
        <Link to="profile">
          <li data-testid="side-menu-item-my-profile">Meu Perfil</li>
        </Link>
        <span>
          <li></li>
        </span>
        <span>
          <li></li>
        </span>
        <Link to="/login">
          <li
            data-testid="side-menu-item-logout"
            // onClick={() => ()}
          >
            Sair
          </li>
        </Link>
      </ul>
    // </div>
  );
};

// const admin = () => {
//   return (
//     <ul>
//       <Link to="/admin/orders">
//         <li data-testid="side-menu-item-orders">Pedidos</li>
//       </Link>
//       <Link to="/admin/profile">
//         <li data-testid="side-menu-item-profile">Perfil</li>
//       </Link>
//       <span>
//         <li></li>
//       </span>
//       <span>
//         <li></li>
//       </span>
//       <Link to="/login">
//         <li
//           data-testid="side-menu-item-logout"
//           // onClick={() =>()}
//         >
//           Sair
//         </li>
//       </Link>
//     </ul>
//   );
// };

export default SideBar;
