import React from 'react';
// ++++++++++
const mockOrder = [
  {
    name: 'skol litraço de 4',
    quantity: 3,
    price: 4.12,
  },
  {
    name: 'brahma litraço de 4',
    quantity: 3,
    price: 4.23,
  },
  {
    name: 'barril',
    quantity: 4,
    price: 42.29,
  },
];
// ++++++++++++++
function orderDetails({
  match: {
    params: { id },
  },
}) {
  const data = '08/09';
  const total = mockOrder.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0,
  );

  return (
    <div>
      {/* Titulo para ser ajustado pelo Header */}
      Cliente - Detalhes do Pedido
      <div>
        <h2 data-testid="order-number">Pedido {id}</h2>
        <h2 data-testid="order-date">{data}</h2>
      </div>
      <div className="lista-dos-produtos">
        {mockOrder.map((product, index) => {
          // Usar component de card usado em outro requisito
          return (
            <div>
              <span data-testid={`${index}-product-qtd`}>{product.quantity} - </span>
              <span data-testid={`${index}-product-name`}>{product.name} </span>
              <span data-testid={`${index}-product-total-value`}>R$ {parseFloat(product.price * product.quantity, 2)}</span>
              <span>(R${product.price} un)</span>
            </div>
          );
        })}
      </div>
      <div data-testid="order-total-value">Total: R$ {total}</div>
    </div>
  );
}

export default orderDetails;
