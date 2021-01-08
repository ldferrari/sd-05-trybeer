const database = require('./connection');

const update = async () => {
  const [users] = await database.execute('SELECT * FROM users;');
  console.log(users);
};

module.exports = {
  update,
};
