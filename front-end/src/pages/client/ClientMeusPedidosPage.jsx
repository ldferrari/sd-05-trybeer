import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/client/Menu';
import MeusPedidosCard from '../../components/client/MeusPedidosCard';
import MeusPedidosData from '../../services/client/fetchMeusPedidosData';
import '../../css/client/clientMeusPedidosPage.css';

export default function ClientMeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const token = localStorage.getItem('token') || null;

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('user'))) {
      setPedidos('');
    } else {
      MeusPedidosData(JSON.parse(localStorage.getItem('user')).id).then((response) => setPedidos(response));
    }
  }, []);

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <Menu title="Meus Pedidos" />
      <div className="bodyMeusPedidos">
        {pedidos.map((order, index) => (
          <MeusPedidosCard key={ order.id } order={ order } index={ index } />
        ))}
      </div>
    </div>
  );
}
