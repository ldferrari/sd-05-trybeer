import React, { useEffect, useState } from 'react';
import Menu from '../../components/client/Menu';
import MeusPedidosCard from '../../components/client/MeusPedidosCard';
import MeusPedidosData from '../../services/client/fetchMeusPedidosData';
import '../../css/client/clientMeusPedidosPage.css';

export default function ClientMeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    MeusPedidosData().then((response) => setPedidos(response));
  }, []);
  console.log(pedidos);
  return (
    <div>
      <Menu title="Meus Pedidos" />
      {pedidos.map((order, index) => (
        <MeusPedidosCard key={ order.id } order={ order } index={index} />
      ))}
    </div>
  );
}
