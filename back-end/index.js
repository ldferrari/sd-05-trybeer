const express = require('express');
const users = require('./controllers/usersController');
require('dotenv').config({ path: __dirname + '/../.env' });

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/users', users);

app.get('/', (_request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
