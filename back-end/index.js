const express = require('express');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');
const profileController = require('./controllers/profileController.js');

const app = express();

app.use(bodyParser.json());

<<<<<<< HEAD
app.post('/login', middlewares.login);

app.use('/profile', profileController)
=======
app.use('/profile', profileController);
>>>>>>> a67d2630b446c329b42820b6aa3fa544538f5b92

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
