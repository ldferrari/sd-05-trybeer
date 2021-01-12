const model = require('../models/ordersModel');
const userService = require('./usersService');

const insertSale = async (order, email) => {
  const { totalPrice, deliveryAddress, deliveryNumber } = order;
  if (!totalPrice || !deliveryAddress || !deliveryNumber || !email) {
    return {
      error: true,
      statusCode: 400,
      message: 'Missing order information',
    };
  }
  const userID = await userService.getUserId(email);
  await model.insertSale(order, userID);
  return { statusCode: 201, message: 'Order placed.' };
};

module.exports = {
  insertSale,
};
