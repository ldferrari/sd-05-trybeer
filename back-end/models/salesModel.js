const connection = require('./connection');

const createSale = async (userId, totalPrice, address, addressNumber, saleDate) =>
  connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?,?,?,?,?,?)',
    [userId, totalPrice, address, addressNumber, saleDate, "open"],
  );

const closeSale = async (id) => connection.execute('UPDATE sales SET status = "closed" WHERE id = ?', [id]);

module.exports = {
  createSale,
  closeSale,
};
