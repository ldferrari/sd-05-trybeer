const pool = require('./connection');

const getUser = async (email) => {
  const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [
    email,
  ]);
  return users;
};

module.exports = {
  getUser,
};
