const express = require('express');
const bodyParser = require('body-parser');
const profileController = require('./controllers/profileController.js');
const productsController = require('./controllers/productsController.js');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/profile', profileController);

app.use('/products', productsController);

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
