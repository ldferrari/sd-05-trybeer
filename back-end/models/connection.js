const mysql = require('mysql2/promise');
require('dotenv').config({ path: `${__dirname}/../../.env` });

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

const connection = mysql.createPool(config);
// const connection = mysql.createConnection(config);

module.exports = connection;
