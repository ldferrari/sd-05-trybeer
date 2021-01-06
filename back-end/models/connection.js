const mysql = require('mysql2/promise');

// require('dotenv').config({ path: `${__dirname}/../../.env` });
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
  database: 'Trybeer',
};

const connection = mysql.createPool(config);

module.exports = connection;
