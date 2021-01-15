const connection = require('./connection');

const getProfile = async (userId) => {
  const [profile] = await connection.execute('SELECT name, email FROM users WHERE id = ?', [userId]);
  return profile[0];
};

module.exports = {
  getProfile,
};
