const path = require('path');
const mysql = require('mysql2/promise');

const filepath = path.join(__dirname, '/../../.env');
require('dotenv').config({ filepath });

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

const connection = mysql.createPool(config);

module.exports = connection;
