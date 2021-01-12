import React, { useContext } from 'react';
import { closeSale } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';
import PropTypes from 'prop-types';

export default function BtnStatus({ id }) {
  const { status } = useContext(TrybeerContext);

  if (!status || status === "Entregue") return <div></div>;

  return (
    <button
      type="button"
      data-testid="mark-as-delivered-btn"
      onClick={() => closeSale(id).then(window.location.reload(true))}
    >
      Marcar como entregue
    </button>
  )
};

BtnStatus.propTypes = {
  id: PropTypes.number.isRequired,
};
