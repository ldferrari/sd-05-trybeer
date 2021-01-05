const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/users.controller');

const app = express();

app.use(bodyParser.json());
app.use('/', userController);

const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  const { message } = err;
  res.status(500).json({ message });
};

app.use(errorMiddleware);

app.listen('3001', () => {
  console.log('Tô on');
});
