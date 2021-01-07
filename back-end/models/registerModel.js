const pool = require('./connection');

const getByEmail = async (email) => {
  const [users] = await pool.execute('SELECT * FROM users;');
  // const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return users;
};

module.exports = {
  getByEmail,
};
