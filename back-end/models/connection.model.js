const mysql2 = require('mysql2/promise');
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

let schema;

const connection = mysql2.createPool(config);

module.exports = connection;
