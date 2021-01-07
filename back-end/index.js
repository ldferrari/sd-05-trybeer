const express = require('express');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');
const profileController = require('./controllers/profileController.js')

const app = express();

app.use(bodyParser.json());

app.post('/login', middlewares.login);

app.use('/profile', profileController)

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
