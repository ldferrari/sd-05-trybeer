const express = require('express');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/login', middlewares.login);

const PORT = 3000;
app.listen(PORT, console.log(`Conectado na porta: ${PORT}`));
