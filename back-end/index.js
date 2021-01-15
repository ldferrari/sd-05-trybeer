const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const profileController = require('./controllers/profileController.js');
const productsController = require('./controllers/productsController.js');
const ordersController = require('./controllers/ordersController.js');
const salesController = require('./controllers/salesController.js');
const checkoutController = require('./controllers/checkoutController');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/profile', profileController);
app.use('/login', loginController);
app.use('/register', registerController);
app.use('/orders', ordersController);
app.use('/admin/orders', salesController);
app.use('/checkout', checkoutController);
app.use(errorMiddleware);

app.use('/products', productsController);

app.use('/images/', express.static(path.join(__dirname, '/images')));

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
