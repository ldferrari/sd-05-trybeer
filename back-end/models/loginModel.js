const db = require('./connection');

const validateLog = async (email, password) => {
  const user = await db.execute('SELECT role, name FROM users WHERE email = ? and password = ? ', [
    email,
    password,
  ]);
  return user[0][0];
};
module.exports = {
  validateLog,
};
