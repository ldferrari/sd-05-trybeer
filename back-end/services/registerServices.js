const model = require('../models/registerModel');

const getByEmail = async (email) => model.getByEmail(email);

const isEmailRegistered = async (email) => {
  const [user] = await model.getByEmail(email);
  if (user !== undefined) return true;
  return false;
};

const create = async (user) => {
  // const { name, email, password, role } = user;
  const { email } = user;
  const validation = await isEmailRegistered(email);
  if (validation) {
    return {
      error: true,
      code: 'conflict',
      message: 'E-mail already in database.',
    };
  }
  return model.create(user);
};

module.exports = {
  getByEmail,
  create,
};
