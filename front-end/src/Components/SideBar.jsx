import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const sideBarStyle = {
  background: 'var(--dark)',
  color: 'var(--white)',
  height:'100vh',
  width: '90vw',
}

const SideBar = ({ toggleDrawer, redirect }) => (
  <div
    style={sideBarStyle}
    role='presentation'
    onClick={toggleDrawer()}
    onKeyDown={toggleDrawer()}
  >
    <List style={{ background: 'var(--dark)' }}>
      <Divider />
      <ListItem
        button
        data-testid="side-menu-item-products"
        onClick={() => { redirect('/products'); }}
      >
        Produtos
      </ListItem>
      <ListItem
        button
        data-testid="side-menu-item-my-orders"
        onClick={() => { redirect('/orders'); }}
      >
        Pedidos
      </ListItem>
      <ListItem
        button
        data-testid="side-menu-item-my-profile"
        onClick={() => { redirect('/profile'); }}
      >
        Meu Perfil
      </ListItem>
      <Divider />
      <ListItem
        button
        data-testid="side-menu-item-logout"
        onClick={() => { redirect('/profile'); }}
      >
        Sair
      </ListItem>
    </List>
  </div>
);

export default SideBar;
