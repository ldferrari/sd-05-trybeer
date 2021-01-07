const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  database: process.env.MYSQL_DB,
  port: process.env.PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
};

module.exports = async (...query) => {
  try {
    const connection = await mysql.createConnection(config);
    const [data] = await connection.query(...query);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
