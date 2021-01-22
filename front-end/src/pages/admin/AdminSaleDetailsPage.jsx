import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuAdm from '../../components/admin/MenuAdm';
import getSaleById from '../../services/admin/getSaleById';
import updateSalesStatus from '../../services/admin/updateSalesStatus';
import '../../css/admin/adminSaleDetailsPage.css';

export default function AdminSaleDetailsPage(props) {
  const [saleDetails, setSaleDetails] = useState('');
  const { id } = props;
  const token = localStorage.getItem('token') || null;
  const dois = 2;

  useEffect(() => {
    getSaleById(id).then((response) => setSaleDetails(response));
  }, [id]);
  if (!token) return <Redirect to="/login" />;

  const handleClick = async () => {
    updateSalesStatus(id, 'Entregue')
      .then(() => getSaleById(id))
      .then((response) => setSaleDetails(response));
  };

  return (
    <div>
      <MenuAdm />
      <div className="adminDetailsBody">
        <div className="adminDetailsTitle">
          <div data-testid="order-number">
            {saleDetails && `Pedido ${saleDetails[0].sale_id}`}
          </div>
          <div data-testid="order-status" className={ saleDetails && `${saleDetails[0].status}` === 'Entregue' ? 'adminDetailsGreen adminDetailsStatus' : 'adminDetailsStatus' }>
            {saleDetails && `${saleDetails[0].status}`}
          </div>
        </div>
        <div>
          {saleDetails && (saleDetails.map((product, index) => (
            <div key="eslint" className="adminDetailsContainer">
              <span data-testid={ `${index}-product-qtd` }>
                {`${product.quantity}`}
              </span>
              <span data-testid={ `${index}-product-name` }>
                {`${product.name}`}
              </span>
              <span data-testid={ `${index}-product-total-value` }>
                {`R$ ${product.total.toFixed(dois).replace('.', ',')}`}
              </span>
              <span data-testid={ `${index}-order-unit-price` } className="adminDetailsPrice">
                {`(R$ ${product.price.replace('.', ',')})`}
              </span>
            </div>
          )))}
        </div>
        <div data-testid="order-total-value" className="adminDetailsTotal">
          {saleDetails && (`Total: R$ ${saleDetails[0].total_price.replace('.', ',')}`)}
        </div>
        {saleDetails && (saleDetails[0].status === 'Pendente' ? (
          <button
            data-testid="mark-as-delivered-btn"
            className="adminDetailsButton"
            type="button"
            onClick={ () => handleClick(id) }
          >
            Marcar como entregue
          </button>
        ) : null)}
      </div>
    </div>
  );
}

AdminSaleDetailsPage.propTypes = {
  id: PropTypes.string,
};

AdminSaleDetailsPage.defaultProps = {
  id: false,
};
