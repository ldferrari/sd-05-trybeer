const database = require('./connection');

const insertCheckout = async (
  user_id,
  total_price,
  delivery_address,
  delivery_number,
  cart
) => {
  const [
    checkout,
  ] = await database.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, now(), "Pendente")',
    [user_id, total_price, delivery_address, delivery_number]
  );
  for (let i = 0; i < cart.length; i++) {
    await database.execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', [checkout.insertId, cart[i].id, cart[i].quantity])
  }
  ;
  return { message: 'Pedido Enviado', checkout }
};

module.exports = {
  insertCheckout,
};
