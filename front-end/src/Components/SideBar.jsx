import React from 'react';

const sideBarStyle = {

}

function SideBar(props) {
  return (
    <div style={{
      position: 'absolute',
      width: '249px',
      height: '581px',
      left: '0px',
      top: '86px',
      background: '#100F0F'
    }}>
      <a href="">Produtos</a>
      <a href="">Meus Pedidos</a>
      <a href="">Meu Perfil</a>
      <a href="">Sair</a>
    </div>
  )
}

export default SideBar;