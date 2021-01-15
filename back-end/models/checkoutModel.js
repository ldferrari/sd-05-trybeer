const database = require('./connection');

const insertCheckout = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  cart,
) => {
  const [
    checkout,
  ] = await database.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, now(), "Pendente")',
    [userId, totalPrice, deliveryAddress, deliveryNumber],
  );
  for (let i = 0; i < cart.length; i++) {
    database.execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', [checkout.insertId, cart[i].id, cart[i].quantity]);
  }
  return { message: 'Pedido Enviado', checkout };
};

module.exports = {
  insertCheckout,
};
