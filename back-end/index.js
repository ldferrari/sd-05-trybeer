require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const registerController = require('./controllers/registerController');

const app = express();

app.use(bodyParser.json());

app.use('/register', registerController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Tô na escuta'));
