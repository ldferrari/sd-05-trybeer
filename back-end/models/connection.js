const mysql = require('mysql2');
require('dotenv').config({ path: __dirname + '/../../.env' });
// dotenv

console.log(process.env.MYSQL_USER);

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

const connection = mysql.createPool(config);

console.log(connection);

module.exports = connection;
