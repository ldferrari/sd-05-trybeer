const express = require('express');
const bodyParser = require('body-parser');

const usersController = require('./controllers/usersController');
const productsController = require('./controllers/productsController');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersController);

app.use('/products', productsController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Yummy, here is ${PORT} port`));
