const database = require('./connection');

const getAllOrders = async (id) => {
  const [orders] = await database.execute('SELECT * FROM sales WHERE user_id = ?', [id]);
  return orders;
};

module.exports = {
  getAllOrders,
};
