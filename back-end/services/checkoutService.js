const checkoutModel = require('../models/checkoutModel');

const insertCheckout = async (
  user_id,
  total_price,
  delivery_address,
  delivery_number,
  cart
) =>
  checkoutModel.insertCheckout(
    user_id,
    total_price,
    delivery_address,
    delivery_number,
    cart
  );

module.exports = {
  insertCheckout,
};
