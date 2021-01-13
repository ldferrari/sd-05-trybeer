const moment = require('moment');
const db = require('./connection');

const insertSale = async (order, userId) => {
  const pending = 'pending';
  const dateFormat = 'YYYY-MM-DD HH:mm:ss';
  const date = moment(Date.now()).format(dateFormat);
  const { totalPrice, deliveryAddress, deliveryNumber } = order;
  const sale = await db.execute(
    'INSERT INTO  sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, Number(totalPrice), deliveryAddress, deliveryNumber, date, pending],
  );
  return sale[0].insertId || undefined;
};

const insertProductSale = async (saleId, productId, qty) => {
  await db.execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', [
    saleId,
    productId,
    qty,
  ]);
};

const getOrdersById = async (userId) => {
  const orders = await db.execute(
    'SELECT id, total_price, sale_date FROM sales WHERE user_id = ? ',
    [userId],
  );
  return orders;
};

module.exports = {
  insertSale,
  getOrdersById,
  insertProductSale,
};
