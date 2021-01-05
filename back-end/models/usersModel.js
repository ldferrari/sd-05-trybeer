const db = require('./connection');

const validateLog = async (email, password) => {
  const user = await db.execute(
    'SELECT role FROM Trybeer.users WHERE email = ? and password = ? ', [email, password],
  );
  return user[0][0].role;
};

module.exports = 
{
  validateLog,
};
