require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const login = require('./loginController');

const app = express();

app.use(bodyParser.json());

app.use('/login', login);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Tô na escuta'));
