const connection = require('./connection');

const getOrders = async (userId) => {
  const [orders] = await connection.execute(
    'SELECT id, date_format(sale_date, "%d/%m") as sale_date, total_price FROM sales WHERE user_id = ? ORDER BY id', [userId],
  );
  return orders;
};

module.exports = {
  getOrders,
};
