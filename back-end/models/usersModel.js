const db = require('./connection');

const checkUser = async (email) => {
  const user = await db.execute(
    'SELECT name FROM Trybeer.users WHERE email = ?', [email],
  );
  return user;
};

module.exports =  checkUser;


