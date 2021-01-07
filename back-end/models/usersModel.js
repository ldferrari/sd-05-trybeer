const db = require('./connection');

const validateLog = async (email, password) => {
  const user = await db.execute('SELECT role FROM users WHERE email = ? and password = ? ', [
    email,
    password,
  ]);
  return user[0][0];
};

const checkUser = async (email) => {
  const user = await db.execute('SELECT email FROM users WHERE email = ? ', [email]);
  // return user[0][0];
  return user;
};

const createUser = async (name, email, password, role) => {
  await db.execute('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [
    name,
    email,
    password,
    role,
  ]);
};

module.exports = {
  validateLog,
  checkUser,
  createUser,
};
