const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const loginController = require('./Controllers/loginController');

const registerController = require('./Controllers/userController');

const profileController = require('./Controllers/profileControllers');

const checkToken = require('./Middlewares/checkToken');

const productsController = require('./Controllers/productsController');

const checkoutController = require('./Controllers/checkoutController');

const ordersController = require('./Controllers/ordersController');

const app = express();

app.use(bodyParser.json());

app.use('/login', loginController);

app.use('/register', registerController);

app.use('/profile', checkToken, profileController);

app.use('/products', checkToken, productsController);

app.use('/checkout', checkToken, checkoutController);

app.use('/orders', checkToken, ordersController);

app.use('/images/', express.static(path.join(__dirname, '..', 'images')));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`O pai tá ON no projeto e na porta ${PORT}`);
});
