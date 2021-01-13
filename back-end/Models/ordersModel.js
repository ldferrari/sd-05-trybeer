const connection = require('./connection');

const getOrders = async (userId) => {
  const [orders] = await connection.execute(
    'SELECT user_id, sale_date, total_price FROM sales WHERE user_id = ?', [userId]);
  return orders;
};

module.exports = {
  getOrders,
};
