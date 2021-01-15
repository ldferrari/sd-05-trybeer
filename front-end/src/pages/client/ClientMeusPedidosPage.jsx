import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/client/Menu';
import MeusPedidosCard from '../../components/client/MeusPedidosCard';
import MeusPedidosData from '../../services/client/fetchMeusPedidosData';
import '../../css/client/clientMeusPedidosPage.css';

export default function ClientMeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const token = localStorage.getItem('token') || null;
  const userData = JSON.parse(localStorage.getItem('user')) || null;
  const id = userData.id || null;
  
  useEffect(() => {
    console.log('user');
    if (!id) {
      setPedidos('');
    } else {
      MeusPedidosData(id).then((response) => setPedidos(response));
    }
  }, [id]);

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <Menu title="Meus Pedidos" />
      {pedidos.map((order, index) => (
        <MeusPedidosCard key={ order.id } order={ order } index={ index } />
      ))}
    </div>
  );
}
