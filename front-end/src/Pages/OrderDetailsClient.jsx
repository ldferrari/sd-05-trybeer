// import { helpers } from 'faker';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Helper from '../Helper';
import { getSalesOrder, salesById, totalPriceOfProducts } from '../Redux/Services';



const decimals = 2;
function OrderDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const [order, setOrder] = useState([]);
  // const [allOrders, SetAllOrders ] = useState([]);
  const [dataDoPedido, setdataDoPedido] = useState(0);
  // let dataDoPedido = 0;

  useEffect(() => {
    salesById(id).then(data => setOrder(data))
    // getSalesOrder().then(all => SetAllOrders(all));
    getSalesOrder().then(all => {
      const saleById = all.find(sale => sale.id == id);
      const dataFormated = new Date(saleById.sale_date).toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "2-digit",
      });
      setdataDoPedido(dataFormated);
    });
  }, [])

  const total =   Helper.transformPrice(totalPriceOfProducts(order));

  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Detalhes do Pedido
      <div>
        <h2 data-testid="order-number">
          Pedido {id}
        </h2>
        <h2 data-testid="order-date">{dataDoPedido}</h2>
      </div>
      <div className="lista-dos-produtos">
        {order.map((product, index) => (
          <div key={ product.name }>
            <span data-testid={ `${index}-product-qtd` }>
              {product.quantity}
              {' '}
              -
              {' '}
            </span>
            <span data-testid={ `${index}-product-name` }>
              {product.name}
              {' '}
            </span>
            <span data-testid={ `${index}-product-total-value` }>
              R$ {Helper.transformPrice(product.price * product.quantity)}
            </span>
            <span>
              (R$ {Helper.transformPrice(product.price)}
              {' '}
              un)
            </span>
          </div>
        ))}
      </div>
      <div data-testid="order-total-value">
        Total: R$ {total}
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default OrderDetails;
