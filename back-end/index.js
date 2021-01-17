require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/login', loginController);
app.use('/register', registerController);
app.use('/users', userController);
app.use('/products', productController);
app.use('/orders', salesController);

app.use('/images', express.static(path.join(__dirname, 'images')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Tô na escuta'));
