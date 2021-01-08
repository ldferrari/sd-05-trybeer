const connection = require('./connection');

const createSale = async (userId, totalPrice, address, addressNumber, saleDate) =>
  connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?,?,?,?,?,?)',
    [userId, totalPrice, address, addressNumber, saleDate, "Pendente"],
  );

const closeSale = async (id) => connection.execute('UPDATE sales SET status = "Entregue" WHERE id = ?', [id]);

const getByUserId = (userId) => connection.execute('SELECT * FROM sales WHERE user_id = ?;', [userId]);

const getAllOpen = () => connection.execute('SELECT * FROM sales WHERE status = "Pendente";');

module.exports = {
  createSale,
  closeSale,
  getByUserId,
  getAllOpen,
};
