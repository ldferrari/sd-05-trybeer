const model = require('../Models/adminOrdersModel');

const getAdminOrders = async () => model.getAdminOrders();

const changeStatus = async (id) => {
  if (!id) {
    return {
      error: true,
      code: 'Invalid_value',
      message: 'Informe um número de pedido válido.',
      statusCode: 401,
    };
  }
  return model.changeStatus(id);
};

module.exports = {
  getAdminOrders,
  changeStatus,
};
