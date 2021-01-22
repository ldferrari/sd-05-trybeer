const pool = require('./connection');

const getByEmail = async (email) => {
  const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return users;
};

const create = async (user) => {
  const { name, email, password, role } = user;
  const newUser = await pool.execute('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
  const [newUserData] = newUser;
  return { message: 'ok', id: newUserData.insertId, name, email, role };
};

module.exports = {
  getByEmail,
  create,
};
