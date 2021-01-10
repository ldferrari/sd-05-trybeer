const db = require('./connection');

const checkUser = async (email) => {
  const user = await db.execute('SELECT name, email FROM users WHERE email = ? ', [email]);
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

const updateUser = async (newName, email) => {
  await db.execute('UPDATE users SET name = ? WHERE email = ?', [newName, email]);
};

// const getUser = async (email) => {
//   const user = await db.execute('SELECT name, email FROM users WHERE email = ? ', [email]);
//   return user;
// }

module.exports = {
  checkUser,
  createUser,
  updateUser,
  // getUser,
};
