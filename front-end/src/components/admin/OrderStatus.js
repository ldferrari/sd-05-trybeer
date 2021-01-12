import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSaleById } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';

export default function OrderStatus({ id }) {
  const { status, setStatus } = useContext(TrybeerContext);

  useEffect(() => {
    getSaleById(id).then((response) => setStatus(response[0].status));
  }, [id, setStatus]);

  if (!status) return <div>Carregando...</div>;

  return (
    <span data-testid="order-status">{status}</span>
  );
}

OrderStatus.propTypes = {
  id: PropTypes.number.isRequired,
};
