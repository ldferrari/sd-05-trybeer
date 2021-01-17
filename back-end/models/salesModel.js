const connection = require('./connection');

async function createSale(userId, totalPrice, address, number, saleDate) {
  return connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?,?,?,?,?,?)',
    [userId, totalPrice, address, number, saleDate, 'Pendente'],
  );
}

async function getSalesById(id) {
  return connection.execute('SELECT * FROM sales WHERE user_id = ?;', [id]);
}

module.exports = { createSale, getSalesById };
