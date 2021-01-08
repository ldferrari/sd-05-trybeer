const userModel = require('../models/userModel');

async function userLogin(email, password) {
  if (!email || !password) return false;

  const user = await userModel.getByEmail(email);
  if (!user || user.password !== password) return false;

  return user;
}

module.exports = { userLogin };
