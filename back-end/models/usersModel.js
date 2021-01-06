const db = require('./connection');

const validateLog = async (email, password) => {
  const user = await db.execute(
    'SELECT role FROM Trybeer.users WHERE email = ? and password = ? ',
    [email, password],
  );
  return user[0][0].role;
};
const checkUser = async (email) => {
  const user = await db.execute(
    'SELECT email FROM Trybeer.users WHERE email = ? ', [email],
  );
  return user[0][0].email;
};
module.exports = {
  validateLog,
  checkUser,
};
