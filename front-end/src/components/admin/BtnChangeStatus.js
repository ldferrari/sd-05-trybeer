import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { closeSale } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';

export default function BtnStatus({ id }) {
  const { status, setStatus } = useContext(TrybeerContext);

  if (!status || status === 'Entregue') return <div />;

  return (
    <button
      type="button"
      data-testid="mark-as-delivered-btn"
      onClick={ () => closeSale(id).then(setStatus('Entregue')) }
    >
      Marcar como entregue
    </button>
  );
}

BtnStatus.propTypes = {
  id: PropTypes.number.isRequired,
};
