const connection = require('./connection');

const getAdminOrders = async () => {
  const [orders] = await connection.execute(
    'SELECT id, user_id as userId, total_price as totalPrice, delivery_address as deliveryAddress, delivery_number as deliveryNumber, sale_date as saleData, status FROM Trybeer.sales;',
  );
  return orders;
};

const changeStatus = async (saleId) => {
  const [status] = await connection.execute(
    'UPDATE sales SET status = "Entregue" WHERE id = ?;', [saleId],
  );
  return status;
};

module.exports = {
  getAdminOrders,
  changeStatus,
};
