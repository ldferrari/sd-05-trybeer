const express = require('express');

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

const loginController = require('./Controllers/loginController');

const registerController = require('./Controllers/userController');

const profileController = require('./Controllers/profileControllers');

const checkToken = require('./Middlewares/checkToken');

const productsController = require('./Controllers/productsController');

const checkoutController = require('./Controllers/checkoutController');

const ordersController = require('./Controllers/ordersController');

const adminOrdersController = require('./Controllers/adminOrdersController');

const detailController = require('./Controllers/detailController');

const admProfileController = require('./Controllers/admProfileController');

const admDetailController = require('./Controllers/admDetailController');

const app = express();

/*
  ENDPOINTS
*/
app.use(cors());

app.use(bodyParser.json());

app.use('/login', loginController);

app.use('/register', registerController);

app.use('/profile', checkToken, profileController);

app.use('/products', checkToken, productsController);

app.use('/checkout', checkToken, checkoutController);

app.use('/orders', checkToken, ordersController);

app.use('/admin/orders', checkToken, adminOrdersController);

app.use('/orders', checkToken, detailController);

app.use('/admin/profile', checkToken, admProfileController);

app.use('/admin/orders', checkToken, admDetailController);

app.use('/images', express.static(path.join(__dirname, 'images')));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`O pai tá ON no projeto e na porta ${PORT}`);
});
