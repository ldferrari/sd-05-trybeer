const model = require('../models/ordersModel');
const userService = require('./usersService');

const insertSale = async (order, email) => {
  const { totalPrice, deliveryAddress, deliveryNumber, cart } = order;
  if (!totalPrice || !deliveryAddress || !deliveryNumber || !email || !cart) {
    return {
      error: true,
      statusCode: 400,
      message: 'Missing order information',
    };
  }
  const userID = await userService.getUserId(email);
  const saleId = await model.insertSale(order, userID);
  const promisesArray = [];

  for (let i = 0; i < cart.length; i += 1) {
    promisesArray.push(model.insertProductSale(saleId, cart[i].id, cart[i].qty));
  }

  Promise.all(promisesArray);

  return { statusCode: 201, message: 'Order placed.' };
};

const getOrdersByUserId = async (email) => {
  const userId = await userService.getUserId(email);

  if (!email) {
    return {
      error: true,
      statusCode: 400,
      message: 'Missing email.',
    };
  }

  const orders = await model.getOrdersByUserId(userId);

  if (!orders) {
    return {
      error: true,
      statusCode: 400,
      message: 'User not found',
    };
  }

  return orders[0] || undefined;
};

const getSalesProducts = async (orderId) => {
  const orders = await model.getSalesProducts(orderId);
  return orders[0] || undefined;
};

const getSalesAdmin = async () => {
  const sales = await model.getSalesAdmin();
  return sales[0];
};

const updateOrderStatus = async (orderId) => {
  await model.updateOrderStatus(orderId);
};

module.exports = {
  insertSale,
  getOrdersByUserId,
  getSalesProducts,
  getSalesAdmin,
  updateOrderStatus,
};
