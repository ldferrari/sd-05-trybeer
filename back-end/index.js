const express = require('express');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const registerController = require('./controllers/registerController');
const profileController = require('./controllers/profileController.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());

<<<<<<< HEAD
<<<<<<< HEAD
app.post('/login', middlewares.login);

app.use('/profile', profileController)
=======
app.use('/profile', profileController);
>>>>>>> a67d2630b446c329b42820b6aa3fa544538f5b92
=======
app.use('/register', registerController);
app.use('/profile', profileController);
app.use(errorMiddleware);
>>>>>>> 8015f4657bf3a2d2347d90ea92cf618fdd34e689

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
