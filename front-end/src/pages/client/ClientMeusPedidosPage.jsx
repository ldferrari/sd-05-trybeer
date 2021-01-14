import React from 'react';
import Menu from '../../components/client/Menu';
import MeusPedidosCard from '../../components/client/MeusPedidosCard';
import '../../css/client/clientMeusPedidosPage.css';

export default function ClientMeusPedidos() {
  return (
    <div>
      <Menu title="Meus Pedidos" />
      {/* {Pedidos.map((index, data, preço) => ( */}
        <MeusPedidosCard /* key={ index } index={ index } data={ data } preço={ preço } */ />
      {/* ))} */}
    </div>
  );
}
