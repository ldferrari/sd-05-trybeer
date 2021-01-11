const connection = require('./connection');

/* const getCheckout = async () => {
  const [checkout] = await connection.execute(
    'SELECT quantity, name, total_price FROM sales_products INNER JOIN products ON sales_products.product_id = products.id INNER JOIN sales ON sales_products.sale_id = sales.id',
  );
  return checkout;
}; */

const getCheckout = async (delivery_address, delibery_number) => {
  const [checkout] = await connection.execute(
    'INSERT INTO sales (delivery_address, delibery_number) VALUES (?, ?)', [delivery_address, delibery_number],
  );
  return checkout;
};

module.exports = {
  getCheckout,
};
