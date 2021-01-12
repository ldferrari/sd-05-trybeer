const connection = require('./connection');

const createSale = async (id, total, deliveryAddress, deliveryNumber) => {
  const [
    checkout,
  ] = await connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, now(), ?)',
    [id, total, deliveryAddress, deliveryNumber, 'Pendente'],
  );
  return checkout;
};

const createProductSale = async (idSale, idProduct, quantity) => {
  const [
    checkout,
  ] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [idSale, idProduct, quantity],
  );
  return checkout;
};

module.exports = {
  createSale,
  createProductSale,
};
