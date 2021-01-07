const userModel = require('../models/userModel');

function userLogin(email, password) {
  if (!email || !password) console.log('All fields must be filled!');

  const user = userModel.getByEmail(email);
  console.log(user);
  if (!user || user.password !== password) console.log('Invalid username or password!');

  return user;
}

module.exports = { userLogin };
