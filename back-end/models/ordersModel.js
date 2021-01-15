const moment = require('moment');
const db = require('./connection');

const insertSale = async (order, userId) => {
  const pending = 'Pendente';
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

const getOrdersByUserId = async (userId) => {
  const orders = await db.execute(
    'SELECT id, total_price, sale_date FROM sales WHERE user_id = ? ',
    [userId],
  );
  return orders;
};

const getSalesProducts = async (orderId) => {
  const orders = await db.execute(
    'SELECT p.name, p.price, sp.quantity, s.sale_date, total_price, s.status FROM sales_products AS sp JOIN products AS p ON sp.product_id = p.id JOIN sales AS s ON s.id = sp.sale_id WHERE sp.sale_id = ?', [orderId],
  );
  return orders;
};

const getSalesAdmin = async () => {
  const sales = await db.execute('SELECT id, delivery_address, delivery_number, total_price, status FROM sales');
  return sales;
};

const updateOrderStatus = async (orderId) => {
  const status = 'Entregue';
  await db.execute('UPDATE sales SET status = ? WHERE id = ?', [status, orderId]);
};

module.exports = {
  insertSale,
  getOrdersByUserId,
  insertProductSale,
  getSalesProducts,
  getSalesAdmin,
  updateOrderStatus,
};
