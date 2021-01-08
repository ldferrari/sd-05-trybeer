const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const usersController = require('./controllers/usersController');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/users', usersController);

app.use('/products', productsController);

app.use('/checkout', salesController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Yummy, here is ${PORT} port`));
