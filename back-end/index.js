const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/users.controller');
const productsController = require('./controllers/products.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', userController);

app.use('/products', productsController);

const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  const { message } = err;
  res.status(500).json({ message });
};

app.use(errorMiddleware);

app.listen('3001', () => {
  console.log('Tô on');
});
