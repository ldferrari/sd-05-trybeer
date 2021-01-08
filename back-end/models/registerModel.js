const pool = require('./connection');

const getByEmail = async (email) => {
  const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return users;
};

const create = async (user) => {
  const { name, email, password, role } = user;
  const newUser = await pool.execute('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
  return { _id: newUser.mysql_insert_id, name, email, password, role };
};

module.exports = {
  getByEmail,
  create,
};
