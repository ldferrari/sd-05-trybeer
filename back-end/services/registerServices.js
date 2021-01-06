const model = require('../models/registerModel');

const getByEmail = async (email) => model.getByEmail(email);

module.exports = {
  getByEmail,
};
