const connection = require('./connection');

const getAdminOrders = async () => {
  const [orders] = await connection.execute(
    'SELECT id, user_id, total_price, delivery_address, delivery_number, sale_date, status FROM Trybeer.sales;'
  );
  return orders;
};

module.exports = {
  getAdminOrders,
};
