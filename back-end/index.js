const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const users = require('./controllers/usersController');
const login = require('./controllers/loginController');
const products = require('./controllers/productsController');
const orders = require('./controllers/ordersController');

// require('dotenv').config({ path: `${__dirname}/../.env` });
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
app.use('/login', login);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/products', products);
app.use('/orders', orders);

app.get('/', (_request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
