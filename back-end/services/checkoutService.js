const checkoutModel = require('../models/checkoutModel');

const insertCheckout = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  cart,
) => checkoutModel.insertCheckout(
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  cart,
);

module.exports = {
  insertCheckout,
};
