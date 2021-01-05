const userModel = require('../models/userModel');

const createUser = async ({ name, email, password, role }) => {
  if (typeof name !== 'string') return false;
  if (typeof email !== 'string') return false;
  if (password.length < 6) return false;
  if (!role) return false;
  const newUser = await userModel.createUser(name, email, password, role);
  return newUser;
};

module.exports = createUser;
