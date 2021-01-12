const moment = require('moment');
const db = require('./connection');

const insertSale = async (order, userId) => {
  const pending = 'pending';
  const dateFormat = 'YYYY-MM-DD HH:mm:ss';
  const date = moment(Date.now()).format(dateFormat);
  const { totalPrice, deliveryAddress, deliveryNumber } = order;
  await db.execute(
    'INSERT INTO  sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, Number(totalPrice), deliveryAddress, deliveryNumber, date, pending],
  );
};

module.exports = {
  insertSale,
};
