const connection = require('./connection');

const getOrders = async (userId) => {
  const [orders] = await connection.execute(
    'SELECT id, total_price, delivery_address, delivery_number, status FROM sales WHERE user_id = ?', [userId]
  );
  return orders;
};

module.exports = {
  getOrders,
};
